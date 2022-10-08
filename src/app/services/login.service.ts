import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticationState = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  authenticate(){
    this.authenticationState.next(true)
  }

  isAuthenticate(){
    return this.authenticationState
  }

  isAuthenticated(){
    return this.authenticationState.value
  }

  async logout(txtUsuario: string){
    let responseLogout: any;

    try {
      this.authenticationState.next(false);
      responseLogout = {cod_resultado: "OK", desc_respuesta: ""};

      return responseLogout;
    }
    catch(e){
      responseLogout = {cod_resultado: "ERR", desc_respuesta: e };
    }
  }

  async login(txtUsuario: string, txtPassword: string){
    let responseLogin: any;

    try {
      const response: any = await this.http.get(environment.urlUsuarios).toPromise();

      if (response == null || response == undefined){
        responseLogin = {cod_resultado: "ERR", desc_respuesta: "Usuario no encontrado"};
      } else {
        if (response.password != txtPassword || response.username != txtUsuario) {
          responseLogin = {cod_resultado: "ERR", desc_respuesta: "Usuario o Password incorrecto"};
        }
        else {
          localStorage.setItem("usuario", JSON.stringify(response));
          responseLogin = {cod_resultado: "OK", desc_respuesta: ""};
        }
      }

      return responseLogin;
    }
    catch(e){
      const response: Respuesta = e.error;
      responseLogin = {cod_resultado: "ERR", desc_respuesta: "Error al validar el usuario: " + response.descError};
      return responseLogin;
    }
  }
}
