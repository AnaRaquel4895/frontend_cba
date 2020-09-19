import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Perfil } from '../models/perfil';

const apiUrl = environment.apiUrl + '/perfiles-usuarios';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  listar(roleId: number | string): Observable<Response<Perfil[]>> {
    return this.http.get<Response<Perfil[]>>(`${apiUrl}/by-roles/${roleId}`);
  }

  savePerfil(data: object): Observable<Response<any>> {
    return this.http.post<Response<any>>(`${apiUrl}`, data);
  }
}
