import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css']
})
export class EventoListaComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.listar()
      .subscribe((response) => {
      });
  }

}
