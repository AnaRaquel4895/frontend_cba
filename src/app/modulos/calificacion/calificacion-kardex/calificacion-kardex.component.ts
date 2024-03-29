import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { CalificacionEditarComponent } from '../calificacion-editar/calificacion-editar.component';
import { InscripcionService } from '../../grupo/services/inscripcion.service';
import { GrupoService } from '../../grupo/services/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { GrupoResourceList } from '../../grupo/models/grupo-resource-list';
import { InscripcionGrupo } from '../../grupo/models/inscripcion-grupo';
import { CalificacionInscripcion } from '../../grupo/models/calificacion-inscripcion';
import { Perfil } from '../../perfil/models/perfil';
import { CalificacionInscripcionService } from '../services/calificacion-inscripcion.service';
import { Utilities } from '../../../Utilities';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-calificacion-kardex',
  templateUrl: './calificacion-kardex.component.html',
  styleUrls: ['./calificacion-kardex.component.css']
})
export class CalificacionKardexComponent implements OnInit {


  displayedColumns = ['periodo', 'gestion', 'curso', 'nivel',
  'horario', 'midterm', 'finalExam', 'nota'];
  
  dataSource = new MatTableDataSource<InscripcionGrupo>([]);

  inscripcionGrupoList: InscripcionGrupo[] = [];

  utils = Utilities;

  constructor(public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private calificacionInscripcionService: CalificacionInscripcionService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['periodo', 'gestion', 'curso', 'nivel',
        'horario', 'midterm', 'finalExam', 'nota'] :
        ['periodo', 'gestion', 'curso', 'nivel',
        'horario', 'midterm', 'finalExam', 'nota'];
    });
  }

  ngOnInit(): void {
    
    
    if (Utilities.personalInf.perfil && Utilities.personalInf.perfil.role_id === "2") {
      this.calificacionInscripcionService.getKardex(Utilities.personalInf.perfil.id)
        .subscribe(response => {
          const dataFiltered = response.data.filter(element=>{
            return Utilities.personalInf.perfil.id == element.perfil_id;
          });          
          this.dataSource = new MatTableDataSource<InscripcionGrupo>(dataFiltered);
        });
    }
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
