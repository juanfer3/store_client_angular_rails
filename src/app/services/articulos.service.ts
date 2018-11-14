import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';
import { Articulo } from '../Models/articulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articuloUrl = 'http://localhost:3000/articulos';

  constructor(private http: HttpClient) { }

  newArticulo(articulo: Articulo) {
    
    const json = JSON.stringify(articulo);
    const post_params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application]/json');
    return this.http.post<Articulo>(this.articuloUrl   , articulo);

  }

}
