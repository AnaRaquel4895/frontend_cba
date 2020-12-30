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
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoService } from '../services/grupo.service';
import { GrupoResourceList } from '../models/grupo-resource-list';
import { Grupo } from '../models/grupo';



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
  periodos = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  form: FormGroup;
  editMode: boolean = false;
  tituloCrear: String = 'Crear Grupo';
  tituloEditar: String = 'Editar Grupo';

  constructor(
    private programaService: ProgramaService,
    private cursoService: CursoService,
    private nivelService: NivelService,
    private horarioService: HorarioService,
    private gestionService: GestionService,
    private perfilService: PerfilService,
    private fb: FormBuilder,
    private grupoService: GrupoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.activatedRoute.paramMap
      .subscribe(
        (params) => {
          if (params.get('id') !== null) {
            this.fillForm(Number(params.get('id')));
          }
        }
      );
  }

  private fillForm(id: number): void {
    this.grupoService.recuperar(id)
      .subscribe((response) => {
        this.form.setValue(this.cleanDataTofillForm(response.data));
        this.editMode = true;
      });
  }

  private cleanDataTofillForm(data: GrupoResourceList): Grupo {
    return {
      id: data.id,
      perfil_usuario_id: data.perfil_usuario_id,
      programa_id: data.programa_id,
      curso_id: data.curso_id,
      nivel_id: data.nivel_id,
      horario_id: data.horario_id,
      gestion_id: data.gestion_id,
      periodo: data.periodo
    };

  }

  private initializeForm(): void {
    this.form = this.fb.group({
      id: [undefined, []],
      perfil_usuario_id: [undefined, []],
      programa_id: [undefined, []],
      curso_id: [undefined, []],
      nivel_id: [undefined, []],
      horario_id: [undefined, []],
      gestion_id: [undefined, []],
      periodo: [undefined, []]
    });
  }

  crear(): void {
    this.grupoService.crear(this.form.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/grupos/lista']);
        }
      );
  }

  editar(): void {
    const id: number = Number(this.form.get('id').value);
    const data: object = this.form.value;
    delete data['id'];
    this.grupoService.editar(id, data)
      .subscribe(
        (response) => {
          this.router.navigate(['/grupos/lista']);
        }
      );
  }
}
