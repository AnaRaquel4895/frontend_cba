import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Horario } from '../models/horario';
import { HorarioService } from '../services/horario.service';


@Component({
  selector: 'app-horario-lista',
  templateUrl: './horario-lista.component.html',
  styleUrls: ['./horario-lista.component.css']
})
export class HorarioListaComponent implements OnInit {

  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Horario>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private programaService: HorarioService,
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
    this.router.navigate([`/horarios/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }


}
