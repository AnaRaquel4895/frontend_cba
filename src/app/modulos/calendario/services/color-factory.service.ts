import { Injectable } from '@angular/core';
import { Colores } from '../enums/colores.enum';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorFactoryService {

  constructor() { }

  createColor(color: Colores): Color {
    switch (color) {
      case Colores.BLUE:
        return {
          primary: '#1e88e5',
          secondary: '#D1E8FF'
        };
      case Colores.GREEN:
        return {
          primary: '#04b404',
          secondary: '#58FA58'
        };
      case Colores.RED:
        return {
          primary: '#fc4b6c',
          secondary: '#f9e7eb'
        };
      case Colores.YELLOW:
        return {
          primary: '#FFFF00',
          secondary: '#F3F781'
        };
      case Colores.ORANGE:
        return {
          primary: '#FF8000',
          secondary: '#FAAC58'
        };
      case Colores.PURPLE:
        return {
          primary: '#4A235A',
          secondary: '#A569BD'
        };
      case Colores.GRAY:
        return {
          primary: '#212F3C',
          secondary: '#85929E'
        };
      case Colores.GRAY:
        return {
          primary: '#212F3C',
          secondary: '#85929E'
        };
      case Colores.BROWN:
        return {
          primary: '#6E2C00',
          secondary: '#EDBB99'
        };
      case Colores.BLACK:
        return {
          primary: '#17202A',
          secondary: '#808B96'
        };
      default:
        return undefined;
    }
  }
}

