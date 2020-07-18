import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoCrearComponent } from './grupo-crear/grupo-crear.component';


@NgModule({
  declarations: [GrupoCrearComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
