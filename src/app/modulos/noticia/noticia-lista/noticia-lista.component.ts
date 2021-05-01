import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-noticia-lista',
  templateUrl: './noticia-lista.component.html',
  styleUrls: ['./noticia-lista.component.css']
})
export class NoticiaListaComponent implements OnInit {

  listaNoticias:Noticia[] = [];

  constructor(private noticiaService: NoticiaService,
              private router: Router) { }

  ngOnInit(): void {
    this.noticiaService.listar()
    .subscribe((response)=>{      
      this.listaNoticias = response.data;    
    });
  }

  editar(id: number): void {
    this.router.navigate([`/noticias/editar-form/${id}`]);
  }

  eliminar(id: number): void{    
    this.noticiaService.eliminar(id)
      .subscribe((response) => {
        this.listaNoticias = this.listaNoticias.filter(e=> e.id !== id);
      });
  }
}
