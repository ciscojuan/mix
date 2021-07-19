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
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public movie: Article;
  public titulo: string;
  public status: string;
/*   public is_edit: boolean; */
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
    this.titulo = 'crear pelicula';
    this.movie = new Article('', '', '', '', null, null);
/*     this.is_edit = false */

    /* this.movie ={
      title: '',
      content: '',
      author: '',
      image: ''
    } */
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.create(this.movie).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.movie = response.movie;
          //Alert
          swal(
            'Great!!!',
            'Articulo creado Corerectamente !',
            'success'
          )
          this._router.navigate(['/blog'])
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

}
