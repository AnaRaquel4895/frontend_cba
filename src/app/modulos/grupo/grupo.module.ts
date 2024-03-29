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
import { GrupoSelectInscripcionComponent } from './grupo-select-inscripcion/grupo-select-inscripcion.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [GrupoCrearComponent, GrupoListaComponent, GrupoListaInscritosComponent, GrupoSelectInscripcionComponent],
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
        path: 'editar-form/:id',
        component: GrupoCrearComponent,
        data: {
          title: 'Editar Grupo',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Grupo' }
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
        path: 'lista-inscritos/:id',
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
    SharedModule
  ]
})
export class GrupoModule { }
