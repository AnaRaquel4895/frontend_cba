import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { element } from 'protractor';
import { ProgramaService } from '../services/programa.service';

@Component({
  selector: 'app-programa-lista',
  templateUrl: './programa-lista.component.html',
  styleUrls: ['./programa-lista.component.css']
})
export class ProgramaListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private programaService: ProgramaService
  ) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombreCompleto', 'opciones'] :
        ['nombreCompleto', 'opciones'];
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }

  editar(id: number): void {

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