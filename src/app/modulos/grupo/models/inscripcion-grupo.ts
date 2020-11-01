import { Perfil } from '../../perfil/models/perfil';
import { CalificacionInscripcion } from './calificacion-inscripcion';

export interface InscripcionGrupo {
  id: number;
  grupo_id: number;
  perfil_usuario_id: number;
  perfil_usuario: Perfil;
  calificacion_inscripcion: CalificacionInscripcion;
}
