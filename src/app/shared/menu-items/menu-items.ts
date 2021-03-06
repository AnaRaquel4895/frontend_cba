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
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'starter',
        name: 'Inicio',
        type: 'link',
        icon: 'content_copy'
    },
    {
        state: 'calendario',
        name: 'Calendario',
        type: 'link',
        icon: 'calendar_today'
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
        children: [
            { state: 'crear-form', name: 'Registrar Usuarios', type: 'link' },
            { state: 'lista', name: 'Lista de Usuarios', type: 'link' },
        ]
    },
    {
        state: 'grupos',
        name: 'Grupos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'crear-form', name: 'Crear Grupo', type: 'link' },
            { state: 'lista', name: 'Lista Grupos', type: 'link' },
        ]
    },
    {
        state: 'calificaciones',
        name: 'Calificaciones',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'inicio', name: 'Calificaciones', type: 'link' },
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
        children: [
            { state: 'lista', name: 'Lista de Programas', type: 'link' },
            { state: 'crear-form', name: 'Nuevo Programa', type: 'link' }
        ]
    },
    {
        state: 'cursos',
        name: 'Cursos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'lista', name: 'Lista de Cursos', type: 'link' },
            { state: 'crear-form', name: 'Nuevo Curso', type: 'link' }
        ]
    },
    {
        state: 'niveles',
        name: 'Niveles',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'lista', name: 'Lista de Niveles', type: 'link' },
            { state: 'crear-form', name: 'Nuevo Nivel', type: 'link' }
        ]
    },
    {
        state: 'horarios',
        name: 'Horarios',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'lista', name: 'Lista de Horarios', type: 'link' },
            { state: 'crear-form', name: 'Nuevo Horario', type: 'link' }
        ]
    },
    {
        state: 'gestiones',
        name: 'Gestiones',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'lista', name: 'Lista de Gestiones', type: 'link' },
            { state: 'crear-form', name: 'Nueva Gestion', type: 'link' }
        ]
    },
    {
        state: 'calendario',
        name: 'Eventos',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [],
        children: [
            { state: 'lista', name: 'Lista de Eventos', type: 'link' },
            { state: 'crear-form', name: 'Nueva Evento', type: 'link' }
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
