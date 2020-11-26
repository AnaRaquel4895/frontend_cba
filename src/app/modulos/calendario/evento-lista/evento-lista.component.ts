import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css']
})
export class EventoListaComponent implements OnInit {

  displayedColumns = ['title', 'start', 'opciones'];
  dataSource = new MatTableDataSource<Evento>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private cursoService: EventoService,
    private router: Router
  ) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['title', 'start', 'opciones'] :
        ['title', 'start', 'opciones'];
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
    this.router.navigate([`/calendario/editar-form/${id}`]);
  }

  eliminar(id: number): void {

  }

}
