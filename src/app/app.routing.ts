import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/*Modulos*/
import { HomeComponent } from './components/home/home.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { FormArticulosComponent } from './components/articulos/form-articulos/form-articulos.component';



const App_Routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'articulos', component: ArticulosComponent
  },
  {
    path: 'articulos/create', component: FormArticulosComponent
  },
  { path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
