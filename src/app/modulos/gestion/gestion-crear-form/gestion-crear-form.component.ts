import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-gestion-crear-form',
  templateUrl: './gestion-crear-form.component.html',
  styleUrls: ['./gestion-crear-form.component.css']
})
export class GestionCrearFormComponent implements OnInit {

  form: FormGroup;
  tituloCrear: String = 'Crear Gestion';
  tituloEditar: String = 'Editar Gestion';
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private gestionService: GestionService,
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
    this.gestionService.recuperar(id)
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
    this.gestionService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/gestiones/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.gestionService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/gestiones/lista']);
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
