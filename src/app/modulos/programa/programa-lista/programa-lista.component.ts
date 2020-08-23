import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProgramaService } from '../services/programa.service';
import { Programa } from '../models/programa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programa-lista',
  templateUrl: './programa-lista.component.html',
  styleUrls: ['./programa-lista.component.css']
})
export class ProgramaListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Programa>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private programaService: ProgramaService,
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
    this.programaService.listar()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response.data);
        }
      );
  }

  editar(id: number): void {
    this.router.navigate([`/programas/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }

}

const ELEMENT_DATA: any[] = [
  {
    nombre: 'Will Smith',
    descripcion: ''
  },
  {
    nombre: 'Johnny Depp',
    descripcion: ''
  },
  {
    nombre: 'Adam Sandler',
    descripcion: ''
  },
];