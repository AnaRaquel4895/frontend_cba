import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { RouterModule } from '@angular/router';
import { GestionListaComponent } from './gestion-lista/gestion-lista.component';
import { GestionCrearFormComponent } from './gestion-crear-form/gestion-crear-form.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GestionListaComponent, GestionCrearFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // GestionRoutingModule
    RouterModule.forChild([
      {
        path: 'lista',
        component: GestionListaComponent,
        data: {
          title: 'Lista de Gestiones',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Gestiones' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: GestionCrearFormComponent,
        data: {
          title: 'Crear Gestion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Gestion' }
          ]
        }
      },
      {
        path: 'editar-form/:id',
        component: GestionCrearFormComponent,
        data: {
          title: 'Editar Gestion',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Gestion' }
          ]
        }
      }
    ]),
  ]
})
export class GestionModule { }
