import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../auth/services/role.service';
import { Role } from '../../auth/models/role';
import { AuthService } from '../../auth/services/auth.service';
import { PerfilService } from '../../perfil/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-crear-form',
  templateUrl: './usuario-crear-form.component.html',
  styleUrls: ['./usuario-crear-form.component.css']
})
export class UsuarioCrearFormComponent implements OnInit {

  usuarioForm: FormGroup;
  rolesLista: Role[] = [];
  editMode: boolean = false;
  tituloCrear: String = 'Registrar Usuario';
  tituloEditar: String = 'Editar Usuario';

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private authService: AuthService,
    private perfilService: PerfilService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.usuarioForm = fb.group({
      id: [undefined],
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
    this.activatedRoute.paramMap
      .subscribe(
        (params) => {
          if (params.get('id') !== null) {
            this.fillForm(Number(params.get('id')));
          }
        }
      );
  }

  fillForm(id: number) {
    this.perfilService.recuperar(id)
      .pipe(map(response => {
        return {
          id: response.data.id,
          nombres: response.data.nombres,
          apellido_paterno: response.data.apellido_paterno,
          apellido_materno: response.data.apellido_materno,
          carnet_identidad: response.data.carnet_identidad,
          celular: response.data.celular
        }
      }))
      .subscribe((value) => {
        this.usuarioForm.get('id').setValue(value.id);
        this.usuarioForm.get('nombres').setValue(value.nombres);
        this.usuarioForm.get('apellido_paterno').setValue(value.apellido_paterno);
        this.usuarioForm.get('apellido_materno').setValue(value.apellido_materno);
        this.usuarioForm.get('carnet_identidad').setValue(value.carnet_identidad);
        this.usuarioForm.get('celular').setValue(value.celular);
        this.editMode = true;
      });
  }


  saveUsuario(): void {
    this.perfilService.savePerfil(this.usuarioForm.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/usuarios/lista']);
        }
      );
  }

  editUsuario(): void {
    const id: number = Number(this.usuarioForm.get('id').value);
    const data: object = this.usuarioForm.value;
    delete data['id'];
    delete data['email'];
    delete data['name'];
    delete data['password'];
    delete data['role_id'];

    this.perfilService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/usuarios/lista']);
        }
      );

  }

}
