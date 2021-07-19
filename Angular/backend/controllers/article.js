'use strict'
var Article = require('../models/article');
var validator = require('validator')
var fs = require('fs');
var path = require('path');

var os = require("os");
const { update, collection, db } = require('../models/article');
const { send } = require('process');

var hostname = os.hostname();

var controller = {
    datosCurso: (req, res) => {
        return res.status(200).send({
            curso: 'Master en Frameworks JS: ANGULAR, REACT, VUE',
            Author: 'Victor Robles Web',
            url: 'victorrobles.web.es',
            alumno: 'Juan Ramirez',
            cliente: hostname

        });

    },

    prueba: (req, res) => {

        return res.status(200).send(`
    
        <div style="text-align: center;">
            <h1>Pagina de Prueba, porfavor ve a la HOME</h1>
            <h2>Lenguajes utilizados en este Proyecto:</h2>
            <ul style="list-style: none;">
                <li>NodeJS</li>
                <li>Angular</li>
                <li>React</li>
                <li>Vue</li>
            </ul>  
        </div>
    
        `)
    },

    save: (req, res) => {
        //Recoger parametros por POST
        var params = req.body;
        console.log(params);
        //Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                STATUS: 'error',
                message: "Faltan datos por enviar"
            })
        }

        if (validate_title && validate_content) {

            //Crear objeto a guardar 
            var article = new Article();
            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;
            article.author = params.author;

            //guardar image
            if(params.image){
                article.image = params.image;
            }else{
                article.image = null;
            }
            //Guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(400).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    })
                }

                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article
                });

            });


        } else {
            return res.status(200).send({
                status: 'error',
                message: "Los datos no son validos"
            })
        }

    },// end save

    getArticles: (req, res) => {

        var query = Article.find({});

        var last = req.params.last

        if (last || last != undefined) {
            query.limit()
        }

        query.sort('-_id').exec((err, articles) => {

            if (err) {
                return status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                })
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                })
            }
            return res.status(200).send({
                status: 'success',
                articles
            })

        })

    },//end getArticles

    getArticle: (req, res) => {
        // recoger id de la url
        var articleId = req.params.id;
        //comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo'
            })
        }
        //Buscar el articulo 
        Article.findById(articleId, (err, article) => {

            if (err || !Article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontro el articulo'
                })
            }

            //mostrar json
            return res.status(200).send({
                status: 'success',
                article
            })
        });
    },//End getArticle

    update: (req, res) => {
        //Recojer el id
        var articleId = req.params.id;
        //Recojer los datos
        var params = req.body;


        //Valdar los datos
        try {
            var valid_title = !validator.isEmpty(params.title);
            var valid_content = !validator.isEmpty(params.content);
            var valid_author = !validator.isEmpty(params.author);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar',
                err
            })
        }
        //Find and update
        if (valid_title && valid_content && valid_author) {
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    //Mostrar json
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!',
                        err
                    });

                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No Existe el articulo ...',
                        err
                    });
                }
                //Mostrar json
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                })
            });

        } else {
            return res.status(500).send({
                status: 'error',
                message: 'La validacion no es correcta ...'
            })
        }

    },//End update

    delete: (req, res) => {
        //Recojer el id
        var articleId = req.params.id;
        //find and delete

        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No se pudo borrar el articulo!!!'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontro el articulo!!!'
                });
            }

            return res.status(200).json({
                status: 'success',
                article: articleRemoved
            })
        });

    },//end delete

    upload: (req, res) => {
        //Configurar modulo connect-multiparty -> routers/articles.js
        //Recojer el fichero de la peticion
        var file_name = 'Imagen no subida...';
        console.log(req.files);

        if (!req.files) {
            return res.status(400).send({
                status: 'error',
                message: file_name
            })
        }
        //Conseguir Nombre y Extension de la imagen
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/')
        //Nombre del archivo
        var file_name = file_split[1]
        // extension de la imagen 
        var extension_split = file_name.split('.')
        var ext = extension_split[1];

        //Validar la extension de la imagen
        if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif') {
            //obtener el id del articulo
            var articleId = req.params.id;
            if (articleId) {
                //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findByIdAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                    if (err || !articleUpdated) {
                        return res.status(400).send({
                            status: 'error',
                            message: 'Error al guardar la imagen en el articulo !!!'
                        })
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    })
                })
            }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                })
            }

        } else {
            //borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'success',
                    message: 'La extension no es Válida !!!'
                });
            });
        }



    },   //end upload

    getImage: (req, res) => {
        //recojer id de la imagen
        var file = req.params.image;
        var path_file = './upload/articles/' + file; //-> indicar la ruta
        //console.log(fs.existsSync(path_file));

        if (fs.existsSync(path_file)) {
            return res.sendFile(path.resolve(path_file));
        } else {
            return res.status(404).send({
                status: 'error',
                mesagge: 'ninguna image con este nombre'
            });
        }
    }, //end getImage

    search: (req, res) => {
        //sacar el string de la url
        var searchString = req.params.search;
        //Buscar el string 

        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } },
                { "content": { "$regex": searchString, "$options": "i" } }
            ]
        })
            .sort([['date', 'descending']])
            .exec((err, articles) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error en la peticion !!!'
                    });
                }

                if (!articles || articles.length <= 0) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay resultados a mostrar !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    articulo: articles
                });
            });

    } //end getImage
}

module.exports = controller;