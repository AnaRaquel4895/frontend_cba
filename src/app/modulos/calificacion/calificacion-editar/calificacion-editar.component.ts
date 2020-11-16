import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalificacionInscripcionService } from '../services/calificacion-inscripcion.service';

@Component({
  selector: 'app-calificacion-editar',
  templateUrl: './calificacion-editar.component.html',
  styleUrls: ['./calificacion-editar.component.css']
})
export class CalificacionEditarComponent implements OnInit {

  form: FormGroup;
  nombreCompleto: string = '';
  constructor(
    public dialogRef: MatDialogRef<CalificacionEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private calificacionInscripcionService: CalificacionInscripcionService
  ) {
    this.startForm();
  }

  startForm(): void {
    this.form = this.fb.group({
      id: [],
      quiz1: [],
      quiz2: [],
      quiz3: [],
      quiz4: [],
      comments: []
    });
  }

  ngOnInit(): void {
    this.nombreCompleto = this.data.nombreCompleto;
    this.form.setValue(this.data.formData);
  }

  onYesClick(): void {
    this.calificacionInscripcionService.editar(Number(this.form.get('id').value), this.form.value)
      .subscribe(
        (response) => {
          this.dialogRef.close(response.data);
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get quiz1(): FormControl {
    return this.form.get('quiz1') as FormControl;
  }

  get quiz2(): FormControl {
    return this.form.get('quiz2') as FormControl;
  }

  get quiz3(): FormControl {
    return this.form.get('quiz3') as FormControl;
  }

  get quiz4(): FormControl {
    return this.form.get('quiz4') as FormControl;
  }

  get comments(): FormControl {
    return this.form.get('comments') as FormControl;
  }
  /** */
  getMidterm(): number {
    return (this.quiz1.value + this.quiz2.value) / 2;
  }

  getFinalExam(): number {
    return (this.quiz3.value + this.quiz4.value) / 2;
  }

  getNotaFinal(): number {
    return (this.getMidterm() + this.getFinalExam()) / 2;
  }
}
