import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Conexion Http */
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Routers */
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';


import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';

/** Servicios */
import { CategoriasService } from "./services/categorias.service";

/** Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoriasComponent,
    HomeComponent,
    ArticulosComponent,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    routing,
    OwlModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
