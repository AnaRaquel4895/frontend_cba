import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { Grupo } from '../models/grupo';
import { GrupoResourceList } from '../models/grupo-resource-list';

const apiUrl = environment.apiUrl + '/grupos';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Grupo>> {
    return this.http.post<Response<Grupo>>(apiUrl, data);
  }

  listar(): Observable<Response<any[]>> {
    return this.http.get<Response<Grupo[]>>(apiUrl);
  }

  recuperar(id: number): Observable<Response<GrupoResourceList>> {
    return this.http.get<Response<GrupoResourceList>>(`${apiUrl}/${id}`);
  }

  editar(id: number, data: object): Observable<Response<Grupo>> {
    return this.http.put<Response<Grupo>>(`${apiUrl}/${id}`, data);
  }

  eliminar(id: number): Observable<Response<Grupo>> {
    return this.http.delete<Response<Grupo>>(`${apiUrl}/${id}`);
  }
}
