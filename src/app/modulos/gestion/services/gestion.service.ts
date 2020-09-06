import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Gestion } from '../models/gestion';

const apiUrl = environment.apiUrl + '/gestiones';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Gestion>> {
    return this.http.post<Response<Gestion>>(apiUrl, data);
  }

  listar(): Observable<Response<Gestion[]>> {
    return this.http.get<Response<Gestion[]>>(apiUrl);
  }

  eliminar(id: number | string): void {

  }

  editar(id: number, data: object): Observable<Response<Gestion>> {
    return this.http.put<Response<Gestion>>(`${apiUrl}/${id}`, data);
  }

  recuperar(id: number): Observable<Response<Gestion>> {
    return this.http.get<Response<Gestion>>(`${apiUrl}/${id}`);
  }
}
