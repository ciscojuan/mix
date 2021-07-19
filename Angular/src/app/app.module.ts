import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar routing del fichero app.routing.ts que creamos
import { routing, appRoutingProviders } from './app.routing';
//importar modulo para formularios
import { FormsModule } from '@angular/forms';
//httpclient to use ajax
import { HttpClientModule } from'@angular/common/http';
//moment
import { MomentModule } from 'ngx-moment';
//fileModule
import { AngularFileUploaderModule } from "angular-file-uploader";

//componente
import { AppComponent } from './app.component';
/* import {MiComponente} from './components/mi-componente/MiComponente.component'
import { PeliculasComponent } from './components/peliculas/peliculas.component'; */
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
/* import { RamdomComponent } from './components/ramdom/ramdom.component'; */
import { ErrorComponent } from './components/error/error.component';
/* import { PeliculaComponent } from './components/pelicula/pelicula.component'; */
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component'
@NgModule({
  declarations: [
    AppComponent,
/*     MiComponente,
    PeliculasComponent, */
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
/*     RamdomComponent, */
    ErrorComponent,
/*     PeliculaComponent, */
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
