import { Injectable } from '@angular/core';
import { RoleEnum } from '../../modulos/auth/enums/role.enum';

export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface SubChildren {
    state: string;
    name: string;
    type?: string;
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    child?: SubChildren[];
    permissions?: string[];
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
    permissions?: string[];
}

const MENUITEMS: Menu[] = [
    {
        state: 'starter',
        name: 'Inicio',
        type: 'link',
        icon: 'content_copy',
        permissions:['can_view_home']
    },
    {
        state: 'calendario',
        name: 'Calendario',
        type: 'link',
        icon: 'calendar_today',
        permissions:['can_read_events_calendario']
    },
    /*
    {
        state: 'material',
        name: 'Aplicaciones',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'starter', name: 'Aplicaciones', type: 'link' },
            { state: 'starter', name: 'Noticias', type: 'link' },
            { state: 'starter', name: 'Mensajes', type: 'link' },
            { state: 'starter', name: 'Calendario', type: 'link' },
            { state: 'starter', name: 'Calificaciones', type: 'link' },
            { state: 'starter', name: 'Reportes', type: 'link' },
        ]
    },
    {
        state: 'material',
        name: 'Cursos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'starter', name: 'Reglamento', type: 'link' },
        ]
    },
    */
    {
        state: 'usuarios',
        name: 'Usuarios',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:['can_list_usuarios','can_create_usurios'],
        children: [
            { state: 'crear-form', name: 'Registrar Usuarios', type: 'link', permissions:['can_create_usurios'] },
            { state: 'lista', name: 'Lista de Usuarios', type: 'link', permissions:['can_list_usuarios'] },
        ]
    },
    {
        state: 'grupos',
        name: 'Grupos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'crear-form', name: 'Crear Grupo', type: 'link', permissions:[] },
            { state: 'lista', name: 'Lista Grupos', type: 'link', permissions:[] },
        ]
    },
    {
        state: 'calificaciones',
        name: 'Calificaciones',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'inicio', name: 'Calificaciones', type: 'link', permissions:[] },
        ]
    },
    {
        state: '',
        name: 'Catalogos',
        type: 'saperator',
        icon: 'av_timer'
    },
    {
        state: 'programas',
        name: 'Programas',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Programas', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nuevo Programa', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'cursos',
        name: 'Cursos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Cursos', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nuevo Curso', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'niveles',
        name: 'Niveles',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Niveles', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nuevo Nivel', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'horarios',
        name: 'Horarios',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Horarios', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nuevo Horario', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'gestiones',
        name: 'Gestiones',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Gestiones', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nueva Gestion', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'calendario',
        name: 'Eventos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Eventos', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Nueva Evento', type: 'link', permissions:[] }
        ]
    },
    {
        state: 'noticias',
        name: 'Noticias',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        permissions:[],
        children: [
            { state: 'lista', name: 'Lista de Noticias', type: 'link', permissions:[] },
            { state: 'crear-form', name: 'Crear Noticia', type: 'link', permissions:[] }
        ]
    },
    /**
    {
        state: 'material',
        name: 'Material Ui',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [{ type: 'red', value: '17' }],
        children: [
            { state: 'badge', name: 'Badge', type: 'link' },
            { state: 'button', name: 'Buttons', type: 'link' },
            { state: 'cards', name: 'Cards', type: 'link' },
            { state: 'grid', name: 'Grid List', type: 'link' },
            { state: 'lists', name: 'Lists', type: 'link' },
            { state: 'menu', name: 'Menu', type: 'link' },
            { state: 'tabs', name: 'Tabs', type: 'link' },
            { state: 'stepper', name: 'Stepper', type: 'link' },
            { state: 'ripples', name: 'Ripples', type: 'link' },
            { state: 'expansion', name: 'Expansion Panel', type: 'link' },
            { state: 'chips', name: 'Chips', type: 'link' },
            { state: 'toolbar', name: 'Toolbar', type: 'link' },
            { state: 'progress-snipper', name: 'Progress snipper', type: 'link' },
            { state: 'progress', name: 'Progress Bar', type: 'link' },
            { state: 'dialog', name: 'Dialog', type: 'link' },
            { state: 'tooltip', name: 'Tooltip', type: 'link' },
            { state: 'snackbar', name: 'Snackbar', type: 'link' },
            { state: 'slider', name: 'Slider', type: 'link' },
            { state: 'slide-toggle', name: 'Slide Toggle', type: 'link' }
        ]
    }
    */
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
