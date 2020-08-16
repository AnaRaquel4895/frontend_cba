import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { RouterModule } from '@angular/router';
import { GestionListaComponent } from './gestion-lista/gestion-lista.component';
import { GestionCrearFormComponent } from './gestion-crear-form/gestion-crear-form.component';


@NgModule({
  declarations: [GestionListaComponent, GestionCrearFormComponent],
  imports: [
    CommonModule,
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
      }
    ]),
  ]
})
export class GestionModule { }
