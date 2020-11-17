import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import { EventoCrearFormComponent } from './evento-crear-form/evento-crear-form.component';
import { EventoListaComponent } from './evento-lista/evento-lista.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs);

@NgModule({
  declarations: [CalendarioComponent, EventoCrearFormComponent, EventoListaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // CalendarioRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: CalendarioComponent,
        data: {
          title: 'Calendario',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Calendario' }
          ]
        }
      },
      {
        path: 'lista',
        component: EventoListaComponent,
        data: {
          title: 'Lista de eventos',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Lista de eventos' }
          ]
        }
      },
      {
        path: 'crear-form',
        component: EventoCrearFormComponent,
        data: {
          title: 'Crear Evento',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Crear Evento' }
          ]
        }
      }
    ]),
  ]
})
export class CalendarioModule { }
