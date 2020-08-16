import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramaRoutingModule } from './programa-routing.module';
import { ProgramaCrearFormComponent } from './programa-crear-form/programa-crear-form.component';
import { ProgramaListaComponent } from './programa-lista/programa-lista.component';


@NgModule({
  declarations: [ProgramaCrearFormComponent, ProgramaListaComponent],
  imports: [
    CommonModule,
    ProgramaRoutingModule
  ]
})
export class ProgramaModule { }
