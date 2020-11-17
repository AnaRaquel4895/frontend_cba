import { Color } from './color';

export interface Evento {
  id: number;
  start: Date;
  end?: Date;
  title: string;
  color: Color | string;
}
