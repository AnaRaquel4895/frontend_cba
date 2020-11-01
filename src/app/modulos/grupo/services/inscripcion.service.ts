import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { InscripcionGrupo } from '../models/inscripcion-grupo';


const apiUrl = environment.apiUrl + '/inscripciones';
@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }

  inscribirGrupo(grupoId: number, perfilId): Observable<Response<InscripcionGrupo>> {
    const data = {
      grupo_id: grupoId,
      perfil_usuario_id: perfilId
    };
    return this.http.post<Response<InscripcionGrupo>>(apiUrl, data);
  }

  listarIncripcionesByGrupo(grupoId: number): Observable<Response<InscripcionGrupo[]>> {
    return this.http.get<Response<InscripcionGrupo[]>>(`${apiUrl}/by-grupo/${grupoId}`);
  }

  eliminarInscripcion(grupoId: number | string): Observable<Response<InscripcionGrupo>> {
    return this.http.delete<Response<InscripcionGrupo>>(`${apiUrl}/${grupoId}`);
  }

}
