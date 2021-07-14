import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { RouterModule } from '@angular/router';
import { HorarioCrearFormComponent } from './horario-crear-form/horario-crear-form.component';
import { HorarioListaComponent } from './horario-lista/horario-lista.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HorarioCrearFormComponent, HorarioListaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
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
      },
      {
        path: 'editar-form/:id',
        component: HorarioCrearFormComponent,
        data: {
          title: 'Editar Horario',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Horario' }
          ]
        }
      }
    ]),
    SharedModule
  ]
})
export class HorarioModule { }
