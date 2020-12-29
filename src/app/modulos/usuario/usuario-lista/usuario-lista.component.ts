import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../../perfil/models/perfil';
import { PerfilService } from '../../perfil/services/perfil.service';
import { RoleEnum } from '../../auth/enums/role.enum';


@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {


  displayedColumns = ['nombreCompleto', 'opciones'];
  dataSource = new MatTableDataSource<Perfil>([]);

  rolUsuario = RoleEnum.NINGUNO;
  roleEnum = RoleEnum;
  title = '';

  constructor(
    public breakpointObserver: BreakpointObserver,
    private router: Router,
    private perfilService: PerfilService,
    private activatedRoute: ActivatedRoute,
  ) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        ['nombres', 'apellido_paterno', 'apellido_materno', 'opciones'] :
        ['nombres', 'apellido_paterno', 'apellido_materno', 'opciones'];
    });
  }

  ngOnInit(): void {

    this.listarPerfiles();
    this.updateTitle(this.rolUsuario);
  }

  recargarLista(role: RoleEnum): void {
    this.rolUsuario = role;
    this.updateTitle(this.rolUsuario);
    this.listarPerfiles();
  }

  updateTitle(rolUsuario: RoleEnum) {
    switch (rolUsuario) {
      case RoleEnum.NINGUNO:
        this.title = 'TODOS los Usuarios';
        break;
      case RoleEnum.ADMINISTRATIVOS:
        this.title = 'ADMINISTRATIVOS';
        break;
      case RoleEnum.PROFESORES:
        this.title = 'PROFESORES';
        break;
      case RoleEnum.ESTUDIANTES:
        this.title = 'ESTUDIANTES';
        break;
      default:
        break;
    }
  }

  private listarPerfiles(): void {
    this.perfilService.listar(this.rolUsuario)
      .subscribe((resp) => {
        this.dataSource = new MatTableDataSource<Perfil>(resp.data);
      });
  }

  editar(id: number): void {
    this.router.navigate([`/usuarios/editar-form/${id}`]);
  }

  eliminar(id: number): void {
    this.perfilService.eliminar(id)
      .subscribe(
        (response) => {
          const newDataSource = this.dataSource.data.filter((e) => e.id != id);
          this.dataSource = new MatTableDataSource<Perfil>(newDataSource);
        },
        (error) => {
          console.log('ERROR AL ELIMINAR EL PERFIL DEL USUARIO: ', error);
        },
      );
  }

}
