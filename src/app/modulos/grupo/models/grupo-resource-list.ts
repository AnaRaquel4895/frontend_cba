import { Grupo } from './grupo';

export interface GrupoResourceList extends Grupo {
    usuario_nombre_completo: string;
    programa_nombre: string;
    curso_nombre: string;
    nivel_nombre: string;
    horario_nombre: string;
    gestion_nombre: string;
  }