import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PerfilService } from '../../perfil/services/perfil.service';
import { RoleEnum } from '../../auth/enums/role.enum';
import { Perfil } from '../../perfil/models/perfil';

@Component({
  selector: 'app-grupo-select-inscripcion',
  templateUrl: './grupo-select-inscripcion.component.html',
  styleUrls: ['./grupo-select-inscripcion.component.css']
})
export class GrupoSelectInscripcionComponent implements OnInit {


  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Perfil>([]);

  constructor(breakpointObserver: BreakpointObserver,
    private perfilService: PerfilService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['position', 'name', 'weight', 'symbol'] :
        ['position', 'name', 'weight', 'symbol'];
    });
  }

  ngOnInit(): void {
    this.perfilService.listar(RoleEnum.ESTUDIANTES)
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<Perfil>(response.data);
        }
      );
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
