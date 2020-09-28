import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GrupoResourceList } from '../models/grupo-resource-list';
import { GrupoService } from '../services/grupo.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-grupo-lista-inscritos',
  templateUrl: './grupo-lista-inscritos.component.html',
  styleUrls: ['./grupo-lista-inscritos.component.css']
})
export class GrupoListaInscritosComponent implements OnInit {

  displayedColumns = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'];
  dataSource = new MatTableDataSource<Inscritos>(ELEMENT_DATA);
  grupo: GrupoResourceList;

  constructor(breakpointObserver: BreakpointObserver,
    private grupoService: GrupoService,
    private activatedRoute: ActivatedRoute) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'] :
        ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'opciones'];
    });
    this.grupoService.recuperar(1)
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          return this.grupoService.recuperar(Number(params.get('id')));
        })
      )
      .subscribe((response)=>{
        this.grupo = response.data;
      });

  }

  ngOnInit(): void {
  }

}

export interface Inscritos {
  nombres: string; // N° grupo
  apellidoPaterno: string; // Curso
  apellidoMaterno: string; // Horario
}

const ELEMENT_DATA: Inscritos[] = [
  { nombres: 'Jorge Luis', apellidoPaterno: 'Aramayo', apellidoMaterno: 'Almazan', },
  { nombres: 'Ana Maria', apellidoPaterno: 'Rojas', apellidoMaterno: 'Rojas', },
  { nombres: 'Ana Gisella', apellidoPaterno: 'Noguera', apellidoMaterno: 'Flores', },
  { nombres: 'Pedro Armando', apellidoPaterno: 'Calizaya', apellidoMaterno: 'Aramayo', },
  { nombres: 'Jose Maria', apellidoPaterno: 'Mamani', apellidoMaterno: 'Alba', },
  { nombres: 'Ana Paola', apellidoPaterno: 'Gomez', apellidoMaterno: 'Fernandes', },
  { nombres: 'Maria Jhanet', apellidoPaterno: 'Claros', apellidoMaterno: 'Cespedes', }
];
