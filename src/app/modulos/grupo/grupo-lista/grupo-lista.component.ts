import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GrupoService } from '../services/grupo.service';
import { GrupoResourceList } from '../models/grupo-resource-list';

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
    public grupoService: GrupoService
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
        }
      );
  }

}
