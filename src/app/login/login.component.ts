import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isLoadingResults: Boolean = false;
  public myForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private loginService: LoginService) {
    this.myForm = this.fb.group(
      {
        usuario: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  openSnackBar(mensaje: string, accion: string) {
    this._snackBar.open(mensaje, accion, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000
    });
  }

  ngOnInit(): void {
    this.onFormSubmit();
  }

  async login() {
   //llamo a la api para validar el usuario y si es correcto, autentico

   const strUsuario: string = this.myForm.get("usuario")?.value;
   const strPassword: string = this.myForm.get("password")?.value;

   if (strUsuario == "" || strPassword == "") {
    this.openSnackBar("Debe ingresar el usuario y el password.", "Aceptar")
   }
   else {
      const response: any = await this.loginService.login(strUsuario, strPassword);

      if (response == null || response == undefined) {
        this.openSnackBar("No se ha encontrado el usuario " + strUsuario + ". Por favor ingrese con un usuario valido en el sistema.", "Aceptar")
      }
      else {
        if (response.cod_resultado == "ERR") {
          this.openSnackBar(response.desc_respuesta, "Aceptar");
        } else {
          this.loginService.authenticate();
          localStorage.setItem("loginname", JSON.stringify(strUsuario));
          //this.onFormSubmit();
          this.openSnackBar("Usuario logeado correctamente", "Aceptar");
        }
      }
    }
  }

  onFormSubmit(): void {
    //(ngSubmit)="onFormSubmit()"
    this.isLoadingResults = true;
  }
}
