import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoCrearComponent } from './grupo-crear/grupo-crear.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';


@NgModule({
  declarations: [GrupoCrearComponent, GrupoListaComponent],
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
      },
      {
        path: 'lista',
        component: GrupoListaComponent,
        data: {
          title: 'Lista de grupos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de grupos' }
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
