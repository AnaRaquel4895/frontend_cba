import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalificacionRoutingModule } from './calificacion-routing.module';
import { HomeCalificacionComponent } from './home-calificacion/home-calificacion.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalificacionListaComponent } from './calificacion-lista/calificacion-lista.component';
import { CalificacionEditarComponent } from './calificacion-editar/calificacion-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HomeCalificacionComponent, CalificacionListaComponent, CalificacionEditarComponent],
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
        path: 'lista/:idInscripcion',
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
    ReactiveFormsModule
  ],
  entryComponents: [
    CalificacionEditarComponent,
    SharedModule
  ]
})
export class CalificacionModule { }
