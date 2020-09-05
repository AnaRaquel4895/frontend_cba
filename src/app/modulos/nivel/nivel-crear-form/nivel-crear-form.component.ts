import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NivelService } from '../services/nivel.service';

@Component({
  selector: 'app-nivel-crear-form',
  templateUrl: './nivel-crear-form.component.html',
  styleUrls: ['./nivel-crear-form.component.css']
})
export class NivelCrearFormComponent implements OnInit {

  form: FormGroup;
  tituloCrear: String = 'Crear Nivel';
  tituloEditar: String = 'Editar Nivel';
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private nivelService: NivelService,
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
    this.nivelService.recuperar(id)
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
    this.nivelService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/niveles/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.nivelService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/niveles/lista']);
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
