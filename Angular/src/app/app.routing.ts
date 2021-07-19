//Importar modulos del routing de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importar componentes a los que voy a hacerles paginas exclusivas
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';

import { ArticleComponent } from './components/article/article.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent} from './components/article-new/article-new.component';
import { ArticleEditComponent} from './components/article-edit/article-edit.component';
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'create', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path:'**', component: ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
