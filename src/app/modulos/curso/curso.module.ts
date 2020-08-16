import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { AsignarCursoComponent } from './asignar-curso/asignar-curso.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoCrearFormComponent } from './curso-crear-form/curso-crear-form.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';


@NgModule({
  declarations: [AsignarCursoComponent, CursoCrearFormComponent, CursoListaComponent],
  imports: [
    CommonModule,
    // CursoRoutingModule,
    RouterModule.forChild([
      {
        path: 'asignar',
        component: AsignarCursoComponent,
        data: {
          title: 'Asignar Curso',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Asignar Curso' }
          ]
        }
      },
      {
        path: 'lista',
        component: CursoListaComponent,
        data: {
          title: 'Lista de Cursos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Cursos' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: CursoCrearFormComponent,
        data: {
          title: 'Crear Curso',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Curso' }
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
export class CursoModule { }
