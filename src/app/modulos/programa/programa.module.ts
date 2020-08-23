import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramaRoutingModule } from './programa-routing.module';
import { RouterModule } from '@angular/router';
import { ProgramaCrearFormComponent } from './programa-crear-form/programa-crear-form.component';
import { ProgramaListaComponent } from './programa-lista/programa-lista.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProgramaCrearFormComponent, ProgramaListaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // ProgramaRoutingModule
    RouterModule.forChild([
      {
        path: 'lista',
        component: ProgramaListaComponent,
        data: {
          title: 'Lista de Programas',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Programas' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: ProgramaCrearFormComponent,
        data: {
          title: 'Crear Programa',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Programa' }
          ]
        }
      },
      {
        path: 'editar-form/:id',
        component: ProgramaCrearFormComponent,
        data: {
          title: 'Editar Programa',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Programa' }
          ]
        }
      }
    ]),
  ]
})
export class ProgramaModule { }
