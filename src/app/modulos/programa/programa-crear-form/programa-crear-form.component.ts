import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProgramaService } from '../services/programa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programa-crear-form',
  templateUrl: './programa-crear-form.component.html',
  styleUrls: ['./programa-crear-form.component.css']
})
export class ProgramaCrearFormComponent implements OnInit {

  form: FormGroup;
  tituloCrear: String = 'Crear Programa';
  tituloEditar: String = 'Editar programa';
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private programaService: ProgramaService,
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
    this.programaService.recuperar(id)
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
    this.programaService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/programas/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.programaService.editar(id, data)
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
