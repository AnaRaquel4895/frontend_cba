import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelListaComponent } from './nivel-lista/nivel-lista.component';
import { NivelCrearFormComponent } from './nivel-crear-form/nivel-crear-form.component';


@NgModule({
  declarations: [NivelListaComponent, NivelCrearFormComponent],
  imports: [
    CommonModule,
    NivelRoutingModule
  ]
})
export class NivelModule { }
