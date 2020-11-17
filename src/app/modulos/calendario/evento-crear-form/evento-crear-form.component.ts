import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../curso/services/curso.service';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento-crear-form',
  templateUrl: './evento-crear-form.component.html',
  styleUrls: ['./evento-crear-form.component.css']
})
export class EventoCrearFormComponent implements OnInit {

  form: FormGroup;
  controlEvento: FormControl;
  tituloCrear: String = 'Crear Evento';
  tituloEditar: String = 'Editar Evento';
  editMode: boolean = false;

  eventosPorDefecto = [];

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventoService: EventoService) {
    this.initializeForms();
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
    this.eventoService.getDataForDefaultEvent()
      .subscribe((lista) => this.eventosPorDefecto = lista);
  }

  private fillForm(id: number): void {
    this.cursoService.recuperar(id)
      .subscribe((response) => {
        this.form.setValue(response.data);

        this.editMode = true;
      });
  }

  /**
      start: new Date('2020-11-03T06:00:00.000Z'),
      end: new Date('2020-11-03T20:00:00.000Z'),
      title: 'Día de inscripciones',
      color: colors.orange, 
  */

  private initializeForms(): void {
    this.form = this.fb.group({
      id: [undefined],
      title: [undefined, [Validators.required]],
      start: [undefined, [Validators.required]],
      color: [undefined, [Validators.required]]
    });

    this.controlEvento = this.fb.control(undefined, [Validators.required]);

    this.controlEvento.valueChanges
      .subscribe((value) => {
        if (value) {
          this.form.get('title').setValue(value.title);
          this.form.get('start').setValue(value.start);
          this.form.get('color').setValue(value.color);
        }
      });
  }

  crear(): void {
    console.log('DATA TO CREATE EVENTO: ', this.form.value);

    /*
    this.cursoService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/cursos/lista']);
        }
      );
    */
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

  get start(): FormControl {
    return this.form.get('start') as FormControl;
  }
 
}
