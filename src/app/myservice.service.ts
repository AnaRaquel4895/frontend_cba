import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
/** TODOS LOS PERMISOS */
const permission: string[] = [

  'can_view_home',
  /*Permisos de usuarios*/
  'can_list_usuarios',
  'can_edit_usuarios',
  'can_delete_usuarios',
  'can_create_usuarios',

  /*Permisos de grupos*/
  'can_read_usuarios', 
  'can_list_grupos',
  'can_edit_grupos',
  'can_delete_grupos',
  'can_create_grupos',
  'can_add_student_grupos',
  'can_filter_grupos',

  /*Permisos de calificaciones*/
  'can_add_grades_calificaciones',
  'can_edit_calificaciones',
  'can_read_calificaciones',
  

  /*Permisos de calendario*/
  'can_read_events_calendario',

  /*Permisos de programas*/
  'can_read_programas', 
  'can_list_programas',
  'can_edit_programas',
  'can_delete_programas',
  'can_create_programas',

  /*Permisos de cursos*/
  'can_read_cursos', 
  'can_list_cursos',
  'can_edit_cursos',
  'can_delete_cursos',
  'can_create_cursos',

  /*Permisos de niveles*/
  'can_read_niveles', 
  'can_list_niveles',
  'can_edit_niveles',
  'can_delete_niveles',
  'can_create_niveles',

  /*Permisos de horarios*/
  'can_read_horarios', 
  'can_list_horarios',
  'can_edit_horarios',
  'can_delete_horarios',
  'can_create_horarios',

  /*Permisos de gestiones*/
  'can_read_gestiones', 
  'can_list_gestiones',
  'can_edit_gestiones',
  'can_delete_gestiones',
  'can_create_gestiones',

  /*Permisos de eventos*/
  'can_read_eventos', 
  'can_list_eventos',
  'can_edit_eventos',
  'can_delete_eventos',
  'can_create_eventos',

  /*Permisos de noticias*/
  'can_read_noticias', 
  'can_list_noticias',
  'can_edit_noticias',
  'can_delete_noticias',
  'can_create_noticias',
];

const persmisionsRoles:any ={
  admin:{
    permissions:[]
  },
  profesor:{
    permissions:[
      'can_view_home',
      'can_read_calificaciones', 
      'can_add_grades_calificaciones',
      'can_edit_calificaciones',
      'can_read_usuarios', 
      'can_list_usuarios',
      'can_read_programas', 
      'can_list_programas',
      'can_read_cursos', 
      'can_list_cursos',
      'can_read_niveles', 
      'can_list_niveles',
      'can_read_horarios', 
      'can_list_horarios',
      'can_read_gestiones', 
      'can_list_gestiones',
      'can_read_eventos', 
      'can_read_events_calendario', 
      'can_list_eventos',
      'can_read_noticias', 
      'can_list_noticias',
    ]
  },
  estudiante:{
    permissions:[
      'can_view_home',
      'can_read_calificaciones',
      'can_read_events_calendario',
      'can_read_noticias', 
      'can_list_noticias',
    ]
  },
  secretaria:{
    permissions:[
      'can_view_home',
      'can_read_usuarios', 
      'can_list_usuarios',
      'can_edit_usuarios',
      'can_delete_usuarios',
      'can_create_usuarios',
      'can_read_grupos', 
      'can_list_grupos',
      'can_edit_grupos',
      'can_delete_grupos',
      'can_create_grupos',
      'can_add_student_grupos',
      'can_filter_grupos',
      'can_read_calificaciones',
      'can_read_events_calendario',
      'can_read_programas', 
      'can_list_programas',
      'can_edit_programas',
      'can_delete_programas',
      'can_create_programas',
      'can_read_cursos', 
      'can_list_cursos',
      'can_edit_cursos',
      'can_delete_cursos',
      'can_create_cursos',
      'can_read_niveles', 
      'can_list_niveles',
      'can_edit_niveles',
      'can_delete_niveles',
      'can_create_niveles',
      'can_read_horarios', 
      'can_list_horarios',
      'can_edit_horarios',
      'can_delete_horarios',
      'can_create_horarios',
      'can_read_gestiones', 
      'can_list_gestiones',
      'can_edit_gestiones',
      'can_delete_gestiones',
      'can_create_gestiones',
      'can_read_eventos', 
      'can_list_eventos',
      'can_edit_eventos',
      'can_delete_eventos',
      'can_create_eventos',
      'can_read_noticias', 
      'can_list_noticias',
      'can_edit_noticias',
      'can_delete_noticias',
      'can_create_noticias',
    ]
  },
};



@Injectable()
export class MyserviceService {

  private _permisions:string[] = []; 

  currentUser = of({
    username: 'juristr',
    permissions: permission
  }).pipe(delay(1000));

  constructor() { }

  checkusernameandpassword(uname: string, pwd: string) {
    if (uname === 'admin' && pwd === 'admin123') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }

  get permisions(): string[] {
    return this._permisions;
  }
}
