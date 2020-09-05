import { Injectable } from '@angular/core';
import { Response } from '../../../models/response';
import { Curso } from '../models/curso';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl + '/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Curso>> {
    return this.http.post<Response<Curso>>(apiUrl, data);
  }

  listar(): Observable<Response<Curso[]>> {
    return this.http.get<Response<Curso[]>>(apiUrl);
  }

  eliminar(id: number | string): void {

  }

  editar(id: number, data: object): Observable<Response<Curso>> {
    return this.http.put<Response<Curso>>(`${apiUrl}/${id}`, data);
  }

  recuperar(id: number): Observable<Response<Curso>> {
    return this.http.get<Response<Curso>>(`${apiUrl}/${id}`);
  }
}
