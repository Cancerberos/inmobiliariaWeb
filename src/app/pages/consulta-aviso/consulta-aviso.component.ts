import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-consulta-aviso',
  templateUrl: './consulta-aviso.component.html',
  styleUrls: ['./consulta-aviso.component.css']
})
export class ConsultaAvisoComponent implements OnInit {
  public myForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ConsultaAvisoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {descripcionAviso: String}) {
    this.myForm = this.fb.group({
      mail: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      mensaje: ["", [Validators.required]]
      })
  }

  openSnackBar(mensaje: string, accion: string) {
    this._snackBar.open(mensaje, accion, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }

  enviar() {
    this.openSnackBar("La consulta se ha enviado correctamente. Pronto nos pondremos en contacto con usted. Gracias!", "Aceptar");
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
    let datosUsuario: any = JSON.parse(localStorage.getItem("usuario")!);

    this.myForm.setValue({
      "mail": datosUsuario.mail,
      "nombre": datosUsuario.apellido + "," + datosUsuario.nombre,
      "mensaje": ""
    });
  }

}
