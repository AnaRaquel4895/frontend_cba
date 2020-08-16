import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { RouterModule } from '@angular/router';
import { NivelListaComponent } from './nivel-lista/nivel-lista.component';
import { NivelCrearFormComponent } from './nivel-crear-form/nivel-crear-form.component';


@NgModule({
  declarations: [NivelListaComponent, NivelCrearFormComponent],
  imports: [
    CommonModule,
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
      }
    ]),
  ]
})
export class NivelModule { }
