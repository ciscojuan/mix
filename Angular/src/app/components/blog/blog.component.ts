import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { Pelicula } from '../../models/pelicula';

import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  //Añadir servicio PeliculaService como providers
  providers: [
    PeliculaService,
    ArticleService
    ]
})
export class BlogComponent implements OnInit {

  public title: String;
  public peliculas: Pelicula[];
  public articles: Article[];
  public url: string;


  constructor(
    //propiedad privada del servicio PeliculaServe
    private _peliculaService: PeliculaService,
    private _articleService: ArticleService

  ) {

    this.title = 'Peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      response => {
        /* console.log(response.article); */
        if(response.articles){
          this.articles = response.articles;
        }else{
          console.log('No hay articulos para mostrar !!!');
          
        }
        
      },
      error =>{
        console.log(error);
      }
    );
    
  }


}
