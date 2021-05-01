import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { Noticia } from '../models/noticia';

const apiUrl = environment.apiUrl + '/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  crear(data: object): Observable<Response<Noticia>> {
    return this.http.post<Response<Noticia>>(apiUrl, data);
  }

  listar(): Observable<Response<any[]>> {
    return this.http.get<Response<Noticia[]>>(apiUrl);
  }

  recuperar(id: number): Observable<Response<Noticia>> {
    return this.http.get<Response<Noticia>>(`${apiUrl}/${id}`);
  }

  editar(id: number, data: object): Observable<Response<Noticia>> {
    return this.http.put<Response<Noticia>>(`${apiUrl}/${id}`, data);
  }

  eliminar(id: number): Observable<Response<Noticia>> {
    return this.http.delete<Response<Noticia>>(`${apiUrl}/${id}`);
  }
}
