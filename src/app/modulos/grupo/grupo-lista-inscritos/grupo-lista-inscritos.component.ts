import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GrupoResourceList } from '../models/grupo-resource-list';
import { GrupoService } from '../services/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InscripcionService } from '../services/inscripcion.service';
import { InscripcionGrupo } from '../models/inscripcion-grupo';

@Component({
  selector: 'app-grupo-lista-inscritos',
  templateUrl: './grupo-lista-inscritos.component.html',
  styleUrls: ['./grupo-lista-inscritos.component.css']
})
export class GrupoListaInscritosComponent implements OnInit {

  displayedColumns = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'];
  dataSource = new MatTableDataSource<InscripcionGrupo>([]);
  isVisibleListaEstudiantes: boolean = false;
  grupo: GrupoResourceList;
  private data: InscripcionGrupo[] = [];
  perfilIdInscritosLista: number[] = [];


  constructor(breakpointObserver: BreakpointObserver,
    private grupoService: GrupoService,
    private activatedRoute: ActivatedRoute,
    private inscripcionService: InscripcionService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'] :
        ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'];
    });


  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          return this.grupoService.recuperar(Number(params.get('id')));
        })
      )
      .subscribe((response) => {
        this.grupo = response.data;
      });

    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          return this.inscripcionService.listarIncripcionesByGrupo(Number(params.get('id')));
        })
      )
      .subscribe((response) => {
        this.data = response.data;
        this.dataSource = new MatTableDataSource<InscripcionGrupo>(this.data);

        this.perfilIdInscritosLista = this.data.map(x => x.perfil_usuario_id);

      });
  }

  mostarListaEstudiantes(): void {
    this.isVisibleListaEstudiantes = true;
  }

  agregarEstudiante(inscripcion: InscripcionGrupo): void {
    this.data.push(inscripcion);
    this.dataSource = new MatTableDataSource(this.data);
    this.perfilIdInscritosLista = this.data.map(x => x.perfil_usuario_id);
    this.isVisibleListaEstudiantes = false;
  }

  eliminarInscripcion(inscripcionId: number): void {
    this.inscripcionService.eliminarInscripcion(inscripcionId)
      .subscribe((response) => {
        this.data = this.data.filter(x => x.id !== inscripcionId);
        this.dataSource = new MatTableDataSource<InscripcionGrupo>(this.data);
        this.perfilIdInscritosLista = this.data.map(x => x.perfil_usuario_id);
      });
  }

}

