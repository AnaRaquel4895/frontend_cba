import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaCrearFormComponent } from './noticia-crear-form/noticia-crear-form.component';
import { NoticiaListaComponent } from './noticia-lista/noticia-lista.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NoticiaCrearFormComponent, NoticiaListaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // NoticiaRoutingModule    
    RouterModule.forChild([
      {
        path: 'lista',
        component: NoticiaListaComponent,
        data: {
          title: 'Lista de Noticias',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de Noticias' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: NoticiaCrearFormComponent,
        data: {
          title: 'Crear Noticia',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Noticia' }
          ]
        }
      },
      {
        path: 'editar-form/:id',
        component: NoticiaCrearFormComponent,
        data: {
          title: 'Editar Noticia',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Editar Noticia' }
          ]
        }
      }
    ]),
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class NoticiaModule { }
