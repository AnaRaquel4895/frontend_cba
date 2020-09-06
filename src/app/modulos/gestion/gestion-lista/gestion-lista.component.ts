import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Gestion } from '../models/gestion';
import { GestionService } from '../services/gestion.service';


@Component({
  selector: 'app-gestion-lista',
  templateUrl: './gestion-lista.component.html',
  styleUrls: ['./gestion-lista.component.css']
})
export class GestionListaComponent implements OnInit {

  
  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Gestion>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private gestionService: GestionService,
    private router: Router
  ) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombreCompleto', 'opciones'] :
        ['nombreCompleto', 'opciones'];
    });
  }

  ngOnInit(): void {
    this.listarProgramas();
  }

  private listarProgramas(): void {
    this.gestionService.listar()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response.data);
        }
      );
  }

  editar(id: number): void {
    this.router.navigate([`/gestiones/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }

}
