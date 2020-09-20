import { Component, OnInit } from '@angular/core';
import { Programa } from '../../programa/models/programa';
import { Curso } from '../../curso/models/curso';
import { Nivel } from '../../nivel/models/nivel';
import { Horario } from '../../horario/models/horario';
import { Gestion } from '../../gestion/models/gestion';
import { ProgramaService } from '../../programa/services/programa.service';
import { CursoService } from '../../curso/services/curso.service';
import { GestionService } from '../../gestion/services/gestion.service';
import { HorarioService } from '../../horario/services/horario.service';
import { NivelService } from '../../nivel/services/nivel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from '../../perfil/services/perfil.service';
import { Perfil } from '../../perfil/models/perfil';
import { RoleEnum } from '../../auth/enums/role.enum';
import { Router } from '@angular/router';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-grupo-crear',
  templateUrl: './grupo-crear.component.html',
  styleUrls: ['./grupo-crear.component.css']
})
export class GrupoCrearComponent implements OnInit {

  programaLista: Programa[] = [];
  cursoLista: Curso[] = [];
  nivelLista: Nivel[] = [];
  horarioLista: Horario[] = [];
  gestionLista: Gestion[] = [];
  perfilLista: Perfil[] = [];

  form: FormGroup;

  constructor(
    private programaService: ProgramaService,
    private cursoService: CursoService,
    private nivelService: NivelService,
    private horarioService: HorarioService,
    private gestionService: GestionService,
    private perfilService: PerfilService,
    private fb: FormBuilder,
    private grupoService: GrupoService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.programaService.listar()
      .subscribe((resp) => { this.programaLista = resp.data; });

    this.cursoService.listar()
      .subscribe((resp) => { this.cursoLista = resp.data; });

    this.nivelService.listar()
      .subscribe((resp) => { this.nivelLista = resp.data; });

    this.horarioService.listar()
      .subscribe((resp) => { this.horarioLista = resp.data; });

    this.gestionService.listar()
      .subscribe((resp) => { this.gestionLista = resp.data; });

    this.perfilService.listar(RoleEnum.PROFESORES)
      .subscribe((resp) => {
        this.perfilLista = resp.data;
      });
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      perfil_usuario_id: [undefined, []],
      programa_id: [undefined, []],
      curso_id: [undefined, []],
      nivel_id: [undefined, []],
      horario_id: [undefined, []],
      gestion_id: [undefined, []],
    });
  }

  crear(): void {
    this.grupoService.crear(this.form.value)
      .subscribe(
        (response) => {
          console.log('EL GRUPO SE CREO: ', response);
          // this.router.navigate(['/gestiones/lista']);
        }
      );
  }
}
