import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCrearFormComponent } from './usuario-crear-form/usuario-crear-form.component';


const routes: Routes = [
  {
    path: 'crear-form',
    component: UsuarioCrearFormComponent,
    data: {
      title: 'Inicio',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inicio' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
