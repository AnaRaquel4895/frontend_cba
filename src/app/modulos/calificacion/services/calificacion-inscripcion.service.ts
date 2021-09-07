import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { CalificacionInscripcion } from '../../grupo/models/calificacion-inscripcion';

const apiUrl = environment.apiUrl + '/calificaciones-inscripciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionInscripcionService {

  constructor(private http: HttpClient) { }

  editar(id: number, data: object): Observable<Response<CalificacionInscripcion>> {
    return this.http.put<Response<CalificacionInscripcion>>(`${apiUrl}/${id}`, data);
  }

  getKardex(perfilId: number): Observable<Response<any[]>> {
    return this.http.get<Response<any[]>>(`${apiUrl}/`);
  }
}
