import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    // CalendarioRoutingModule,
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
