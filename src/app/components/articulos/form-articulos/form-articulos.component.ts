import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-articulos',
  templateUrl: './form-articulos.component.html',
  styleUrls: ['./form-articulos.component.scss']
})
export class FormArticulosComponent implements OnInit {

  nestedForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.nestedForm = this.fb.group({
      nombre: [null, [Validators.required]],
      imagenes: this.fb.array([this.addImagenGroup()])
    })

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
