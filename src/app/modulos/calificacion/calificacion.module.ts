import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalificacionRoutingModule } from './calificacion-routing.module';
import { HomeCalificacionComponent } from './home-calificacion/home-calificacion.component';


@NgModule({
  declarations: [HomeCalificacionComponent],
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
      }
    ]),
  ]
})
export class CalificacionModule { }
