import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Nivel } from '../models/nivel';
import { NivelService } from '../services/nivel.service';

@Component({
  selector: 'app-nivel-lista',
  templateUrl: './nivel-lista.component.html',
  styleUrls: ['./nivel-lista.component.css']
})
export class NivelListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Nivel>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private programaService: NivelService,
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
    this.router.navigate([`/niveles/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }

}
