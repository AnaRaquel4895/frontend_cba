import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../modulos/auth/services/auth.service';
import { Utilities } from '../Utilities';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InscripcionGrupo } from '../modulos/grupo/models/inscripcion-grupo';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalificacionInscripcionService } from '../modulos/calificacion/services/calificacion-inscripcion.service';
import { CalificacionInscripcion } from '../modulos/grupo/models/calificacion-inscripcion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-kardex-view',
  templateUrl: './kardex-view.component.html',
  styleUrls: ['./kardex-view.component.scss'],
  providers: [MyserviceService]
})
export class KardexViewComponent implements OnInit {
  
  displayedColumns = ['periodo', 'gestion', 'curso', 'nivel',
  'horario', 'midterm', 'finalExam', 'nota'];
  
  dataSource = new MatTableDataSource<InscripcionGrupo>([]);

  inscripcionGrupoList: InscripcionGrupo[] = [];

  utils = Utilities;

  constructor(public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private calificacionInscripcionService: CalificacionInscripcionService,
    public dialogRef: MatDialogRef<KardexViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['periodo', 'gestion', 'curso', 'nivel',
        'horario', 'midterm', 'finalExam', 'nota'] :
        ['periodo', 'gestion', 'curso', 'nivel',
        'horario', 'midterm', 'finalExam', 'nota'];
    });
  }

  ngOnInit(): void {
    this.calificacionInscripcionService.getKardex(0)
      .subscribe(response => {
        const dataFiltered = response.data
        .filter(element => {
          return this.data.perfilId == element.perfil_id;
        });
        this.dataSource = new MatTableDataSource<InscripcionGrupo>(dataFiltered);       
      });
  }

  getCalificacion(data: InscripcionGrupo): CalificacionInscripcion {
    return data.calificacion_inscripcion;
  }

  exportarKardex(): void {
    let DATA = document.getElementById('kardex-data');
    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('kardex-data.pdf');
    });
  }
}
