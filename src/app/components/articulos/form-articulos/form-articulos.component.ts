import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { Categoria } from '../../../Models/categoria';
import { CategoriasService } from "../../../services/categorias.service";


@Component({
  selector: 'app-form-articulos',
  templateUrl: './form-articulos.component.html',
  styleUrls: ['./form-articulos.component.scss']
})
export class FormArticulosComponent implements OnInit {

  public categorias: Categoria[];

  nestedForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService
    ) { }


  ngOnInit() {
    this.nestedForm = this.fb.group({
      categoria_id: [null, [Validators.required]],
      nombre: [null, [Validators.required]],

      imagenes: this.fb.array([this.addImagenGroup()])
    });

    this.categoriasService.getCategorias().subscribe(
      data => {
        this.categorias = data;
        console.log(this.categorias);
      }
    );

  }

  addImagenGroup() {
      return this.fb.group({
        nombre: [null, [Validators.required]]
      });
  }

  addImagen() {
    this.imagenArray.push(this.addImagenGroup());
  }

  get nombre() {
    return this.nestedForm.get('nombre');
  }

  get imagenArray() {
    return <FormArray>this.nestedForm.get('imagenes');
  }

  removeImagen(index) {
    this.imagenArray.removeAt(index);
  }

  submitHandler() {


      console.log({...this.nestedForm.value});


  }

}
