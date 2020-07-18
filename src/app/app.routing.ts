import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'material',
                loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                path: 'starter',
                loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
            },
            {
                path: 'usuarios',
                loadChildren: () => import('./modulos/usuario/usuario.module').then(m => m.UsuarioModule)
            },
            {
                path: 'cursos',
                loadChildren: () => import('./modulos/curso/curso.module').then(m => m.CursoModule)
            },
            {
                path: 'calificaciones',
                loadChildren: () => import('./modulos/calificacion/calificacion.module').then(m => m.CalificacionModule)
            },
            {
                path: 'grupos',
                loadChildren: () => import('./modulos/grupo/grupo.module').then(m => m.GrupoModule)
            },
            {
                path: 'icons',
                loadChildren: () => import('./icons/mat-icon.module').then(m => m.IconsModule)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
