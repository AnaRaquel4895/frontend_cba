import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { HorarioService } from '../services/horario.service';

@Component({
  selector: 'app-horario-crear-form',
  templateUrl: './horario-crear-form.component.html',
  styleUrls: ['./horario-crear-form.component.css']
})
export class HorarioCrearFormComponent implements OnInit {

  form: FormGroup;
  tituloCrear: String = 'Crear Horario';
  tituloEditar: String = 'Editar Horario';
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private horarioService: HorarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(
        (params) => {
          if (params.get('id') !== null) {
            this.fillForm(Number(params.get('id')));
          }
        }
      );
  }

  private fillForm(id: number): void {
    this.horarioService.recuperar(id)
      .subscribe((response) => {
        this.form.setValue(response.data);

        this.editMode = true;
      });
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      id: [undefined],
      nombre: ['', [Validators.required]],
      descripcion: [undefined, []]
    });
  }

  crear(): void {
    this.horarioService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/horarios/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.horarioService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/horarios/lista']);
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
