import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';
import { Categoria } from '../Models/categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriaUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<Categoria[]>(this.categoriaUrl);
  }

}
