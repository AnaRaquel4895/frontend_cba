import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { Grupo } from '../models/grupo';

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

}
