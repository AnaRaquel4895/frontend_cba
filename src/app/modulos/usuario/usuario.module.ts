import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCrearFormComponent } from './usuario-crear-form/usuario-crear-form.component';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from '../../starter/starter.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioCrearFormComponent],
  imports: [
    CommonModule,
    // UsuarioRoutingModule,
    RouterModule.forChild([
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
      }
    ]),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
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
