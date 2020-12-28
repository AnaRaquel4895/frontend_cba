import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../models/response';
import { Colores } from '../enums/colores.enum';
import { Evento } from '../models/evento';
import { ColorFactoryService } from './color-factory.service';

const apiUrl = environment.apiUrl + '/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private colorFactoryService: ColorFactoryService,
    private http: HttpClient) { }

  getDataForDefaultEvent(): Observable<any> {
    return of([
      {
        title: 'Día de inscripciones',
        color: this.colorFactoryService.createColor(Colores.ORANGE),
        start: new Date()
      },
      {
        title: 'Inicio de clases',
        color: this.colorFactoryService.createColor(Colores.GREEN),
        start: new Date()
      },
      {
        title: 'Examen Midterm',
        color: this.colorFactoryService.createColor(Colores.YELLOW),
        start: new Date()
      },
      {
        title: 'Examen Final',
        color: this.colorFactoryService.createColor(Colores.RED),
        start: new Date()
      },
      {
        title: 'Entrega de notas',
        color: this.colorFactoryService.createColor(Colores.BLUE),
        start: new Date()
      },
      {
        title: 'TOEFL iBT',
        color: this.colorFactoryService.createColor(Colores.PURPLE),
        start: new Date()
      },
      {
        title: 'Achievement Test',
        color: this.colorFactoryService.createColor(Colores.GRAY),
        start: new Date()
      },
      {
        title: 'Examen de Egreso',
        color: this.colorFactoryService.createColor(Colores.BROWN),
        start: new Date()
      },
      {
        title: 'Otro',
        color: this.colorFactoryService.createColor(Colores.BROWN),
        start: new Date()
      },
    ]);
  }

  crear(data: object): Observable<Response<Evento>> {
    data['color'] = JSON.stringify(data['color']);
    return this.http.post<Response<Evento>>(apiUrl, data)
      .pipe(map(response => {
        response.data.color = JSON.parse(response.data.color as string);
        return response;
      }));
  }

  editar(id: number, data: object): Observable<Response<Evento>> {
    return this.http.put<Response<Evento>>(`${apiUrl}/${id}`, data);
  }

  listar(): Observable<Response<Evento[]>> {
    return this.http.get<Response<Evento[]>>(apiUrl)
      .pipe(map(response => {
        response.data = response.data.map(e => {
          e.color = JSON.parse(e.color as string);
          e.start = new Date(e.start);
          return e;
        });
        return response;
      }));
  }

  recuperar(id: number): Observable<Response<Evento>> {
    return this.http.get<Response<Evento>>(`${apiUrl}/${id}`)
      .pipe(map(response => {
        response.data.color = JSON.parse(response.data.color as string);
        response.data.start = new Date(response.data.start);
        return response;
      }));
  }


}
