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
    private eventoService: EventoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
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



  private initializeForms(): void {
    this.form = this.fb.group({
      id: [undefined],
      title: [undefined, [Validators.required]],
      start: [undefined, [Validators.required]],
      end: [undefined],
      color: [undefined, [Validators.required]]
    });

    this.controlEvento = this.fb.control(undefined, [Validators.required]);

    this.controlEvento.valueChanges
      .subscribe((value) => {
        if (value) {
          console.log('VALUE CHANGE DETECTED: ', value);

          this.form.get('title').setValue(value.title);
          this.form.get('start').setValue(value.start);
          this.form.get('color').setValue(value.color);
        }
      });
  }

  private fillForm(id: number): void {

    this.eventoService.recuperar(id)
      .subscribe((response) => {
        console.log('>>>>> recuperar por id: ', response.data);

        this.form.get('title').setValue(response.data.title);
        this.form.get('start').setValue(response.data.start);
        this.controlEvento.setValue({
          title: response.data.title,
          color: response.data.color,
          start: response.data.start
        });
        // this.form.get('color').setValue(response.data.color);
        // this.form.setValue(response.data);

        this.editMode = true;
      },
        error => {
          console.log('>>>>>> Error: ', error);

        }
      );

  }

  crear(): void {
    this.eventoService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/calendario/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    console.log('>>> Data before to edit: ', data, ' id: ', id);

    /*
    this.eventoService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/cursos/lista']);
        }
      );
    */
  }

  get start(): FormControl {
    return this.form.get('start') as FormControl;
  }

}
