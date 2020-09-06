import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Horario } from '../models/horario';

const apiUrl = environment.apiUrl + '/horarios';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Horario>> {
    return this.http.post<Response<Horario>>(apiUrl, data);
  }

  listar(): Observable<Response<Horario[]>> {
    return this.http.get<Response<Horario[]>>(apiUrl);
  }

  eliminar(id: number | string): void {

  }

  editar(id: number, data: object): Observable<Response<Horario>> {
    return this.http.put<Response<Horario>>(`${apiUrl}/${id}`, data);
  }

  recuperar(id: number): Observable<Response<Horario>> {
    return this.http.get<Response<Horario>>(`${apiUrl}/${id}`);
  }
}
