'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');
var router = express.Router();
//cargar moduulo connect-multiparti
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload'});
//rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/prueba', ArticleController.prueba);
//Rutas del blog
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/update/:id', ArticleController.update);
router.delete('/delete/:id', ArticleController.delete);
router.post('/upload-image/:id?', md_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);
module.exports = router;