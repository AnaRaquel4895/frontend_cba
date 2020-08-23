import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Programa } from '../models/programa';

const apiUrl = environment.apiUrl + '/programas';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Programa>> {
    return this.http.post<Response<Programa>>(apiUrl, data);
  }

  listar(): Observable<Response<Programa[]>> {
    return this.http.get<Response<Programa[]>>(apiUrl);
  }

  eliminar(id: number | string): void {

  }

  editar(id: number | string, data: object): void {

  }

  recuperar(id: number | string): void {

  }
}
