import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalificacionRoutingModule } from './calificacion-routing.module';
import { HomeCalificacionComponent } from './home-calificacion/home-calificacion.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalificacionListaComponent } from './calificacion-lista/calificacion-lista.component';


@NgModule({
  declarations: [HomeCalificacionComponent, CalificacionListaComponent],
  imports: [
    CommonModule,
    // CalificacionRoutingModule,
    RouterModule.forChild([
      {
        path: 'inicio',
        component: HomeCalificacionComponent,
        data: {
          title: 'Calificaciones',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Calificaciones' }
          ]
        }
      },
      {
        path: 'lista',
        component: CalificacionListaComponent,
        data: {
          title: 'Calificaciones',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Calificaciones' }
          ]
        }
      }
    ]),
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class CalificacionModule { }
