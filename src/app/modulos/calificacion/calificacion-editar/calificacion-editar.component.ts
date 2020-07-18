import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calificacion-editar',
  templateUrl: './calificacion-editar.component.html',
  styleUrls: ['./calificacion-editar.component.css']
})
export class CalificacionEditarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CalificacionEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
