import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-noticia-crear-form',
  templateUrl: './noticia-crear-form.component.html',
  styleUrls: ['./noticia-crear-form.component.css']
})
export class NoticiaCrearFormComponent implements OnInit {

  form: FormGroup;  
  tituloCrear: String = 'Crear Noticia';
  tituloEditar: String = 'Editar Noticia';
  editMode: boolean = false;

  eventosPorDefecto = [];

  constructor(
    private fb: FormBuilder,
    private noticiaService: NoticiaService,
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
    /*
    this.eventoService.getDataForDefaultEvent()
      .subscribe((lista) => this.eventosPorDefecto = lista);
    */
  }
  
  private initializeForms(): void {
    this.form = this.fb.group({
      id: [undefined],
      fecha: [undefined, []],
      titulo: [undefined, []],      
      descripcion: [undefined],
      link: [undefined, [Validators.required]]
    });
   
  }

  private fillForm(id: number): void {
    this.noticiaService.recuperar(id)
      .subscribe((response) => {        
        this.form.get('id').setValue(response.data.id);
        this.form.get('titulo').setValue(response.data.titulo);
        this.form.get('descripcion').setValue(response.data.descripcion);
        this.form.get('link').setValue(response.data.link);
        this.form.get('fecha').setValue(response.data.fecha);       
        this.editMode = true;
      },
        error => {
          console.log('>>>>>> Error: ', error);
        }
      );

  }

  crear(): void {    
    this.noticiaService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/noticias/lista']);          
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.noticiaService.editar(id, data)
      .subscribe(
        (response) => {          
          this.router.navigate(['/noticias/lista']);
        }
      );
  }

}
