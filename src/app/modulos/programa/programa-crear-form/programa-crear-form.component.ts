import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-programa-crear-form',
  templateUrl: './programa-crear-form.component.html',
  styleUrls: ['./programa-crear-form.component.css']
})
export class ProgramaCrearFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [undefined, []]
    });
  }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

  ngOnInit(): void {
  }

  crear(): void {
    console.log('Crear: ', this.form.value);
  }

}
