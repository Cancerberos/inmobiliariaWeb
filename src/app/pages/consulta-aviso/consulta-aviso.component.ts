import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsultaAvisoService } from 'src/app/services/consulta-aviso.service';
import { ConsultaAviso } from 'src/app/interfaces/consulta-aviso';
import { Value } from '../../interfaces/consulta-aviso';

@Component({
  selector: 'app-consulta-aviso',
  templateUrl: './consulta-aviso.component.html',
  styleUrls: ['./consulta-aviso.component.css']
})
export class ConsultaAvisoComponent implements OnInit {
  public myForm: FormGroup;
  private consultaAviso: ConsultaAviso = {
    nombre: {
        value: ""
    },
    apellido: {
        value: ""
    },
    email: {
        value: ""
    },
    aviso: {
        value: {
            rel: "",
            href: "",
            method: "",
            type: "",
            title: ""
        }
    },
    mensaje: {
        value: ""
    },
    estadoContacto: {
        value: {
            rel: "",
            href: "",
            method: "",
            type: "",
            title: ""
        }
    }
};
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder,
              private consultaAvisoService: ConsultaAvisoService,
              private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ConsultaAvisoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {idAviso: string, descripcionAviso: string}) {
    this.myForm = this.fb.group({
      mail: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
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
    this.consultaAviso.apellido.value = this.myForm.get("apellido")?.value.toUpperCase();
    this.consultaAviso.nombre.value = this.myForm.get("nombre")?.value.toUpperCase();
    this.consultaAviso.email.value = this.myForm.get("mail")?.value;
    this.consultaAviso.mensaje.value = this.myForm.get("mensaje")?.value.toUpperCase();
    this.consultaAviso.aviso.value.href = "http://localhost:8080/restful/objects/simple.aviso/" + this.data.idAviso;
    this.consultaAviso.aviso.value.method = "GET";
    this.consultaAviso.aviso.value.rel = "urn:org.restfulobjects:rels/value";
    this.consultaAviso.aviso.value.type = "application/json;profile=\"urn:org.restfulobjects:repr-types/object\"";
    this.consultaAviso.aviso.value.title = this.data.descripcionAviso;
    this.consultaAviso.estadoContacto.value.href = "http://localhost:8080/restful/objects/inmobiliaria.EstadoContacto/1";
    this.consultaAviso.estadoContacto.value.method = "GET";
    this.consultaAviso.estadoContacto.value.rel = "urn:org.restfulobjects:rels/value";
    this.consultaAviso.estadoContacto.value.type = "application/json;profile=\"urn:org.restfulobjects:repr-types/object\"";
    this.consultaAviso.estadoContacto.value.title = "PENDIENTE";
    //this.consultaAviso.mensaje.value = this.consultaAviso.mensaje.value.toUpperCase();

    const respuesta = this.consultaAvisoService.addAvisoContacto(this.consultaAviso);
    console.log("Alta", respuesta);

    this.openSnackBar("La consulta se ha enviado correctamente. Pronto nos pondremos en contacto con usted. Gracias!", "Aceptar");
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
