import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProgramaService } from '../services/programa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programa-crear-form',
  templateUrl: './programa-crear-form.component.html',
  styleUrls: ['./programa-crear-form.component.css']
})
export class ProgramaCrearFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private programaService: ProgramaService,
    private router: Router) {
    this.form = fb.group({
      id: [undefined],
      nombre: ['', [Validators.required]],
      descripcion: [undefined, []]
    });
  }

  ngOnInit(): void {
  }

  crear(): void {
    this.programaService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/programas/lista']);
        }
      );
  }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

  get descripcion(): FormControl {
    return this.form.get('descripcion') as FormControl;
  }

}
