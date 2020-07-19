import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-grupo-lista-inscritos',
  templateUrl: './grupo-lista-inscritos.component.html',
  styleUrls: ['./grupo-lista-inscritos.component.css']
})
export class GrupoListaInscritosComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'opciones'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['position', 'name', 'weight', 'symbol', 'opciones'] :
        ['position', 'name', 'weight', 'symbol', 'opciones'];
    });
  }

  ngOnInit(): void {
  }

}

export interface Element {
  name: string; // N° grupo
  position: string; // Curso
  weight: string; // Horario
  symbol: string; // Profesor
}

const ELEMENT_DATA: Element[] = [
  { name: 'AIT 0A', position: '1', weight: '7:00-10:15', symbol: 'Charles Darwin' },
  { name: 'ART 0A', position: '1', weight: '8:30-10:00', symbol: 'Napoleón Bonaparte' },
  { name: 'AAI 1A', position: '1', weight: '13:45-17:00', symbol: 'Julio César' },
  { name: 'AIT 0A', position: '2', weight: '7:00-10:15', symbol: 'Albert Einstein' },
  { name: 'AI 7A', position: '1', weight: '18:35-21:45', symbol: 'George Washington' },
  { name: 'AAR 3B', position: '1', weight: '8:30-10:00', symbol: 'William Shakespeare' },
  { name: 'TRL 1B', position: '1', weight: '10:15-11:30', symbol: 'Cristóbal Colón' },
  { name: 'TRL 6A', position: '1', weight: '07:00-08:30', symbol: 'Isaac Newton' },
  { name: 'KDC 3B', position: '1', weight: '10:15-11:·30', symbol: 'Sigmund Freud' },
  { name: 'PTSL 1B', position: '1', weight: '15:45:17:00', symbol: 'Martin Luther King' },
];
