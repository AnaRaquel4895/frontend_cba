import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoCrearComponent } from './grupo-crear/grupo-crear.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GrupoCrearComponent],
  imports: [
    CommonModule,

    // GrupoRoutingModule,
    RouterModule.forChild([
      {
        path: 'crear-form',
        component: GrupoCrearComponent,
        data: {
          title: 'Crear Grupo',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Grupo' }
          ]
        }
      }
    ]),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GrupoModule { }
