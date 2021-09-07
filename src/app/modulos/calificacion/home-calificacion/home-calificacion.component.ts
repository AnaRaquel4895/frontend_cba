import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { GrupoService } from '../../grupo/services/grupo.service';
import { GrupoResourceList } from '../../grupo/models/grupo-resource-list';
import { Utilities } from '../../../Utilities';

@Component({
  selector: 'app-home-calificacion',
  templateUrl: './home-calificacion.component.html',
  styleUrls: ['./home-calificacion.component.css']
})
export class HomeCalificacionComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<GrupoResourceList>([]);

  constructor(breakpointObserver: BreakpointObserver,
    private router: Router,
    private grupoService: GrupoService) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['position', 'name', 'weight', 'symbol'] :
        ['position', 'name', 'weight', 'symbol'];
    });
  }

  ngOnInit(): void {
    this.grupoService.listar()
      .subscribe((response) => {

        if(Utilities.personalInf.perfil && Utilities.personalInf.perfil.role_id === "3")
        {
          this.dataSource = new MatTableDataSource<GrupoResourceList>(
            response.data.filter(grupo => grupo.perfil_usuario_id === Utilities.personalInf.perfil.id )
            );
        }
        else
        {
          this.dataSource = new MatTableDataSource<GrupoResourceList>(response.data);
        }
      });
  }

  selectRow(row: GrupoResourceList): void {
    this.router.navigate([`/calificaciones/lista/${row.id}`]);
  }
}
