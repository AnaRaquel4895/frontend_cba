import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Curso } from '../models/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Curso>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private cursoService: CursoService,
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
    this.cursoService.listar()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response.data);
        }
      );
  }

  editar(id: number): void {
    this.router.navigate([`/cursos/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }

}
