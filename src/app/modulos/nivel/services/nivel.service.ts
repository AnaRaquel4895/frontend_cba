import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Nivel } from '../models/nivel';

const apiUrl = environment.apiUrl + '/niveles';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Nivel>> {
    return this.http.post<Response<Nivel>>(apiUrl, data);
  }

  listar(): Observable<Response<Nivel[]>> {
    return this.http.get<Response<Nivel[]>>(apiUrl);
  }

  eliminar(id: number | string): void {

  }

  editar(id: number, data: object): Observable<Response<Nivel>> {
    return this.http.put<Response<Nivel>>(`${apiUrl}/${id}`, data);
  }

  recuperar(id: number): Observable<Response<Nivel>> {
    return this.http.get<Response<Nivel>>(`${apiUrl}/${id}`);
  }
}
