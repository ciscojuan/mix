import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: String;

  public articles: Article[];
  constructor(
    private _articleService: ArticleService
  ) {     
    this.title = 'home';
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        /* console.log(response.articles); */
        if(response.articles){
          this.articles = response.articles;
          console.log(this.articles);
          
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
