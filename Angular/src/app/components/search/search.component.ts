import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from'../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  
  public articles: Article[];
  public search: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _articleService: ArticleService
  ) { 
    
   }

  ngOnInit(): void {

     this._route.params.subscribe(params => {
      var search = params['search'];

      this._articleService.search(search).subscribe(
        response =>{
          if(response.articles){
            this.articles = response.articles
            console.log(this.articles);
            
          }else{
            console.log('Algo salio mal');
            
          }
          
        },
        error => {
          console.log(error)
        }
      )


      
    });
  }
 

}
