import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PerfilService } from '../../perfil/services/perfil.service';
import { RoleEnum } from '../../auth/enums/role.enum';
import { Perfil } from '../../perfil/models/perfil';
import { InscripcionService } from '../services/inscripcion.service';
import { Response } from '../../../models/response';


@Component({
  selector: 'app-grupo-select-inscripcion',
  templateUrl: './grupo-select-inscripcion.component.html',
  styleUrls: ['./grupo-select-inscripcion.component.css']
})
export class GrupoSelectInscripcionComponent implements OnInit {

  @Input()
  grupoId: number;

  @Input()
  perfilIdInscritosLista: number[] = [];

  @Output() onEstudianteRegistrado: EventEmitter<any> = new EventEmitter();


  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Perfil>([]);

  constructor(breakpointObserver: BreakpointObserver,
    private perfilService: PerfilService,
    private inscripcionService: InscripcionService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['position', 'name', 'weight', 'symbol'] :
        ['position', 'name', 'weight', 'symbol'];
    });
  }

  ngOnInit(): void {
    this.perfilService.listar(RoleEnum.ESTUDIANTES)
      .subscribe(
        (response) => {
          let dataAux = response.data;
          this.perfilIdInscritosLista.forEach(element => {
            dataAux = dataAux.filter(x => x.id !== element);
          });
          this.dataSource = new MatTableDataSource<Perfil>(dataAux);
        }
      );
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  registrarEstudiante(perfilId: number): void {
    this.inscripcionService.inscribirGrupo(this.grupoId, perfilId)
      .subscribe(
        (response) => {
          this.onEstudianteRegistrado.emit(response.data);
        }
      );
  }

}
