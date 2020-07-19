import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoCrearComponent } from './grupo-crear/grupo-crear.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoListaInscritosComponent } from './grupo-lista-inscritos/grupo-lista-inscritos.component';


@NgModule({
  declarations: [GrupoCrearComponent, GrupoListaComponent, GrupoListaInscritosComponent],
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
      },
      {
        path: 'lista-inscritos',
        component: GrupoListaInscritosComponent,
        data: {
          title: 'Lista de inscritos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de inscritos' }
          ]
        }
      },
    ]),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GrupoModule { }
