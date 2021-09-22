import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCrearFormComponent } from './usuario-crear-form/usuario-crear-form.component';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from '../../starter/starter.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UsuarioCrearFormComponent, UsuarioListaComponent],
  imports: [
    CommonModule,
    // UsuarioRoutingModule,
    RouterModule.forChild([
      {
        path: 'lista',
        component: UsuarioListaComponent,
        data: {
          title: 'Lista de Usuarios',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Usuarios' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: UsuarioCrearFormComponent,
        data: {
          title: 'Registrar Usuario',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Registrar Usuario' }
          ]
        }
      },
      {
        path: 'editar-form/:id',
        component: UsuarioCrearFormComponent,
        data: {
          title: 'Editar Usuario',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Usuario' }
          ]
        }
      }
    ]),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    UsuarioListaComponent
  ]
  
})
export class UsuarioModule { }
/*
export const UsuarioRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
	data: {
      title: 'Inicio',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inicio' }
      ]
    }
  }
];
*/
