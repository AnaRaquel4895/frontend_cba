import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GrupoService } from '../services/grupo.service';
import { GrupoResourceList } from '../models/grupo-resource-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {

  displayedColumns = ['numero', 'curso', 'horario', 'profesor', 'opciones'];
  dataSource = new MatTableDataSource<GrupoResourceList>([]);

  listaGestiones = [];
  listaPeriodos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  gestionFiltro = undefined;
  periodoFiltro = undefined;

  gruposSinFiltro = [];

  isFiltered = false;

  constructor(
    breakpointObserver: BreakpointObserver,
    public grupoService: GrupoService,
    private router: Router,
  ) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['numero', 'curso', 'horario', 'profesor', 'opciones'] :
        ['numero', 'curso', 'horario', 'profesor', 'opciones'];
    });
  }

  ngOnInit(): void {
    this.grupoService.listar()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<GrupoResourceList>(response.data);
          this.gruposSinFiltro = response.data;
          this.listaGestiones = response.data.map(e => {
            return e.gestion_nombre;
          });
          this.listaGestiones = [...new Set(this.listaGestiones)];
          this.listaGestiones = this.listaGestiones.sort(function (a, b) { return a - b });    
        }
      );
  }

  filtrarGrupos(): void {  
    const gruposFiltrados = this.gruposSinFiltro.filter(grupo => {
      return grupo.gestion_nombre === this.gestionFiltro && grupo.periodo === this.periodoFiltro;
    });
    this.dataSource = new MatTableDataSource<GrupoResourceList>(gruposFiltrados);
    this.isFiltered = true;
  }

  limpiarFiltros(): void {
    this.gestionFiltro = undefined;
    this.periodoFiltro = undefined;
    this.dataSource = new MatTableDataSource<GrupoResourceList>(this.gruposSinFiltro);
    this.isFiltered = false;
  }

  editar(id: number): void {
    this.router.navigate([`/grupos/editar-form/${id}`]);
  }

  eliminar(id: number): void {
    this.grupoService.eliminar(id)
      .subscribe(
        (response) => {
          const newDataSource = this.dataSource.data.filter((e) => e.id != id);
          this.dataSource = new MatTableDataSource<GrupoResourceList>(newDataSource);
        },
        (error) => {
          console.log('ERROR AL ELIMINAR EL GRUPO: ', error);
        },
      );
  }
}
