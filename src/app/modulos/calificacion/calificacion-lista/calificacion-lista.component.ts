import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { CalificacionEditarComponent } from '../calificacion-editar/calificacion-editar.component';

@Component({
  selector: 'app-calificacion-lista',
  templateUrl: './calificacion-lista.component.html',
  styleUrls: ['./calificacion-lista.component.css']
})
export class CalificacionListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'periodo', 'fecha', 'firstQuiz',
    'secondQuiz', 'midterm', 'thirdQuiz', 'finalExam', 'nota', 'comentarios', 'opciones'];
  dataSource = new MatTableDataSource<Inscrito>(ELEMENT_DATA);

  constructor(public breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombreCompleto', 'periodo', 'fecha', 'firstQuiz',
          'secondQuiz', 'midterm', 'thirdQuiz', 'finalExam', 'nota', 'comentarios', 'opciones'] :
        ['nombreCompleto', 'periodo', 'fecha', 'firstQuiz',
          'secondQuiz', 'midterm', 'thirdQuiz', 'finalExam', 'nota', 'comentarios', 'opciones'];
    });
  }

  ngOnInit(): void {
  }

  editarCalificacion(): void {
    this.openDialog();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CalificacionEditarComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
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
