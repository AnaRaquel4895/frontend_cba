import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioCrearFormComponent } from './horario-crear-form/horario-crear-form.component';
import { HorarioListaComponent } from './horario-lista/horario-lista.component';


@NgModule({
  declarations: [HorarioCrearFormComponent, HorarioListaComponent],
  imports: [
    CommonModule,
    HorarioRoutingModule
  ]
})
export class HorarioModule { }
