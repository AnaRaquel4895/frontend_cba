import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GrupoService } from '../services/grupo.service';
import { GrupoResourceList } from '../models/grupo-resource-list';
import { Router } from '@angular/router';
import { Grupo } from '../models/grupo';

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {

  displayedColumns = ['numero', 'curso', 'horario', 'profesor', 'opciones'];
  dataSource = new MatTableDataSource<GrupoResourceList>([]);

  constructor(
    breakpointObserver: BreakpointObserver,
    public grupoService: GrupoService,
    private router: Router
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
          console.log(response.data.map(e=>{
            return e.gestion_nombre;
          }));  
          console.log(response.data.map(e=>{
            return e.periodo;
          }));        
        }
      );
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
