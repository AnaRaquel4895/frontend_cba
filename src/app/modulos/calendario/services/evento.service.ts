import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
        title: 'Examen Mid Term',
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
    ]);
  }

  crear(data: object): Observable<Response<Evento>> {
    return this.http.post<Response<Evento>>(apiUrl, data);
  }

  listar(): Observable<Response<Evento[]>> {
    return this.http.get<Response<Evento[]>>(apiUrl);
  }
}
