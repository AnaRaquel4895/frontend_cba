export interface Perfil {
  id: number;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  carnet_identidad: string;
  celular: string;
  user_id: number;
  isEstudiante?: boolean;
}
