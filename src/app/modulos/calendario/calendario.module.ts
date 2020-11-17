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

registerLocaleData(localeEs);

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
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
      }
    ]),
  ]
})
export class CalendarioModule { }
