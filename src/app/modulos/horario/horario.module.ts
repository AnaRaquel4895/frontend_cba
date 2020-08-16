import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { RouterModule } from '@angular/router';
import { HorarioCrearFormComponent } from './horario-crear-form/horario-crear-form.component';
import { HorarioListaComponent } from './horario-lista/horario-lista.component';


@NgModule({
  declarations: [HorarioCrearFormComponent, HorarioListaComponent],
  imports: [
    CommonModule,
    // HorarioRoutingModule
    RouterModule.forChild([
      {
        path: 'lista',
        component: HorarioListaComponent,
        data: {
          title: 'Lista de Horarios',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Horarios' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: HorarioCrearFormComponent,
        data: {
          title: 'Crear Horario',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Horario' }
          ]
        }
      }
    ]),
  ]
})
export class HorarioModule { }
