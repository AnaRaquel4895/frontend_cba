import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { element } from 'protractor';

@Component({
  selector: 'app-programa-lista',
  templateUrl: './programa-lista.component.html',
  styleUrls: ['./programa-lista.component.css']
})
export class ProgramaListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombreCompleto', 'opciones'] :
        ['nombreCompleto', 'opciones'];
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }

  editarCalificacion(): void {
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