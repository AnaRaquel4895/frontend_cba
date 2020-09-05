import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CursoService } from '../services/curso.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-curso-crear-form',
  templateUrl: './curso-crear-form.component.html',
  styleUrls: ['./curso-crear-form.component.css']
})
export class CursoCrearFormComponent implements OnInit {

  form: FormGroup;
  tituloCrear: String = 'Crear Curso';
  tituloEditar: String = 'Editar Curso';
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
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
    this.cursoService.recuperar(id)
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
    this.cursoService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/cursos/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.cursoService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/cursos/lista']);
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
