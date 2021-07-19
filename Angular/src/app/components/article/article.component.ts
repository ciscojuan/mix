import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';//Servicio
import { Article } from '../../models/article';//modleo
import { Router, ActivatedRoute, Params } from '@angular/router';//Recibir parametros http
import { Global } from '../../services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article: Article[];
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { 
    this.url  = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          
          if(response.article){
            this.article = response.article
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

  delete(id){

    swal({
      title: "¿Estaś seguro de borrar este articulo ?",
      text: "Una vez borrado, no podras recuperarlo!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response =>{
            swal("El articulo ha sido borrado !!!", {
              icon: "success",
            });
              this._router.navigate(['/blog']);
                   
          },
          error =>{ 
            console.log(<any>error);
          }
        )

      } else {
        swal("El articulo esta intacto !!!");
      }

    });
  
    
  }

}
