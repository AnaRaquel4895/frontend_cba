import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { RouterModule } from '@angular/router';
import { NivelListaComponent } from './nivel-lista/nivel-lista.component';
import { NivelCrearFormComponent } from './nivel-crear-form/nivel-crear-form.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NivelListaComponent, NivelCrearFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // NivelRoutingModule
    RouterModule.forChild([
      {
        path: 'lista',
        component: NivelListaComponent,
        data: {
          title: 'Lista de Niveles',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Niveles' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: NivelCrearFormComponent,
        data: {
          title: 'Crear Nivel',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Nivel' }
          ]
        }
      },
      {
        path: 'editar-form/:id',
        component: NivelCrearFormComponent,
        data: {
          title: 'Editar Nivel',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Nivel' }
          ]
        }
      }
    ]),
  ]
})
export class NivelModule { }
