import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario-crear-form',
  templateUrl: './usuario-crear-form.component.html',
  styleUrls: ['./usuario-crear-form.component.css']
})
export class UsuarioCrearFormComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
   }

  ngOnInit(): void {
  }

}
