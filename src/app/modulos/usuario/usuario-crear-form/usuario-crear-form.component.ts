import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../auth/services/role.service';
import { Role } from '../../auth/models/role';
import { AuthService } from '../../auth/services/auth.service';
import { PerfilService } from '../../perfil/services/perfil.service';

@Component({
  selector: 'app-usuario-crear-form',
  templateUrl: './usuario-crear-form.component.html',
  styleUrls: ['./usuario-crear-form.component.css']
})
export class UsuarioCrearFormComponent implements OnInit {

  usuarioForm: FormGroup;
  rolesLista: Role[] = [];

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private authService: AuthService,
    private perfilService: PerfilService,
  ) {
    this.usuarioForm = fb.group({
      nombres: [],
      apellido_paterno: [],
      apellido_materno: [],
      carnet_identidad: [],
      celular: [],

      role_id: [],
      name: [],
      email: [undefined, [Validators.email]],
      password: [],
    });
  }

  ngOnInit(): void {
    this.roleService
      .getList()
      .subscribe((response) => {
        this.rolesLista = response.data;
      });
  }

  saveUsuario(): void {
    this.perfilService.savePerfil(this.usuarioForm.value)
      .subscribe(
        (response) => {
          console.log('Usuario Creado: ', response);
        }
      );
  }

}
