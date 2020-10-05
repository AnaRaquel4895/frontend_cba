import { Perfil } from '../../perfil/models/perfil';

export interface InscripcionGrupo {
  id: number;
  grupo_id: number;
  perfil_usuario_id: number;
  perfil_usuario: Perfil;
}
