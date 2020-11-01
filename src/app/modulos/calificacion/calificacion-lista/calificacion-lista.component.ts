import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { CalificacionEditarComponent } from '../calificacion-editar/calificacion-editar.component';
import { InscripcionService } from '../../grupo/services/inscripcion.service';
import { GrupoService } from '../../grupo/services/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GrupoResourceList } from '../../grupo/models/grupo-resource-list';
import { InscripcionGrupo } from '../../grupo/models/inscripcion-grupo';
import { CalificacionInscripcion } from '../../grupo/models/calificacion-inscripcion';
import { Perfil } from '../../perfil/models/perfil';

@Component({
  selector: 'app-calificacion-lista',
  templateUrl: './calificacion-lista.component.html',
  styleUrls: ['./calificacion-lista.component.css']
})
export class CalificacionListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'quiz1', 'quiz2', 'midterm',
    'quiz3', 'quiz4', 'finalExam', 'nota', 'comentarios', 'opciones'];
  dataSource = new MatTableDataSource<InscripcionGrupo>([]);

  grupo: GrupoResourceList = undefined;

  constructor(public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private inscripcionService: InscripcionService,
    private grupoService: GrupoService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombreCompleto', 'quiz1', 'quiz2', 'midterm',
          'quiz3', 'quiz4', 'finalExam', 'nota', 'comentarios', 'opciones'] :
        ['nombreCompleto', 'quiz1', 'quiz2', 'midterm',
          'quiz3', 'quiz4', 'finalExam', 'nota', 'comentarios', 'opciones'];
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const idGrupo = Number(params.get('idInscripcion'));
        return this.grupoService.recuperar(idGrupo);
      })
    ).subscribe(
      (response) => {
        this.grupo = response.data;
      }
    );

    this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const idGrupo = Number(params.get('idInscripcion'));
        return this.inscripcionService.listarIncripcionesByGrupo(idGrupo);
      })
    ).subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<InscripcionGrupo>(response.data);
      }
    );
  }

  editarCalificacion(element: InscripcionGrupo): void {
    this.openDialog(element.calificacion_inscripcion, element.perfil_usuario);
  }

  openDialog(calificacion: CalificacionInscripcion, perfil: Perfil): void {
    const dialogRef = this.dialog.open(CalificacionEditarComponent, {
      width: '500px',
      data: {
        nombreCompleto: `${perfil.nombres} ${perfil.apellido_paterno} ${perfil.apellido_materno}`,
        formData: {
          id: calificacion.id,
          quiz1: calificacion.quiz1,
          quiz2: calificacion.quiz2,
          quiz3: calificacion.quiz3,
          quiz4: calificacion.quiz4,
          comments: calificacion.comments
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);

    });
  }

  getCalificacion(data: InscripcionGrupo): CalificacionInscripcion {
    return data.calificacion_inscripcion;
  }
}

const ELEMENT_DATA: Inscrito[] = [
  {
    nombreCompleto: 'Will Smith',
    periodo: '',
    fecha: '',
    firstQuiz: 0,
    secondQuiz: 0,
    midterm: 0,
    thirdQuiz: 0,
    finalExam: 0,
    nota: 0,
    comentarios: ''
  },
  {
    nombreCompleto: 'Johnny Depp',
    periodo: 'Feb-20',
    fecha: '23/02/2020',
    firstQuiz: 30,
    secondQuiz: 40,
    midterm: 70,
    thirdQuiz: 35,
    finalExam: 60,
    nota: 83,
    comentarios: 'Well done'
  },
  {
    nombreCompleto: 'Adam Sandler',
    periodo: '',
    fecha: '',
    firstQuiz: 0,
    secondQuiz: 0,
    midterm: 0,
    thirdQuiz: 0,
    finalExam: 0,
    nota: 0,
    comentarios: ''
  },
];

export class Inscrito {
  nombreCompleto: string;
  periodo: string;
  fecha: string;
  firstQuiz: number;
  secondQuiz: number;
  midterm: number;
  thirdQuiz: number;
  finalExam: number;
  nota: number;
  comentarios: string;
}
