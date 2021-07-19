import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//modelo
import { Article } from '../../models/article';
//service
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
//sweetAlert
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public movie: Article;
  public titulo: string;
  public status: string;
  public is_edit: boolean;
  public url: string;
  //configuracion fileUploader modulke
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "1",
    uploadAPI: {
      url: Global.url + 'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube una imagen ...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.titulo = 'Actualizar Pelicula';
    this.movie = new Article('', '', '', '', null, null);
    this.is_edit = true;
    this.url = Global.url;

    /* this.movie ={
      title: '',
      content: '',
      author: '',
      image: ''
    } */
  }

  ngOnInit(): void {
    this.getMovie()
  }

  onSubmit() {
    this._articleService.update(this.movie._id, this.movie).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.movie = response.article;
          //Alert
          swal(
            'Great!!!',
            'Articulo creado Corerectamente !',
            'success'
          )

          this._router.navigate(['/blog/articulo/', this.movie._id])
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error.message)
      }
    )
  }

  imageUpload(data) {
  console.log(data)
/*   let image_data = JSON.parse(data.response);
  alert(image_data.image) */

      let image_data = data.body.image;               

      this.movie.image =  image_data;    
    }

    getMovie(){
      this._route.params.subscribe(params => {
        let id = params['id'];
  
        this._articleService.getArticle(id).subscribe(
          response => {
            
            if(response.article){
              this.movie = response.article 
            }else{
              this._router.navigate(['/home'])
            }
          },
          error => {
            this._router.navigate(['/home'])          
          }
        );
      });
    }

}
