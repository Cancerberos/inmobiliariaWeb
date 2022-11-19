import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  async login(txtUsuario: any, txtPassword: any){
    let responseLogin: any;

    try {
      const auth: any = "Basic " +  environment.apiAuth;
      const header = new HttpHeaders({"Authorization": auth, "Accept": environment.apiAccept});
      const params = new HttpParams()
        .set("username", txtUsuario)
        .set("password", txtPassword);

      const response: any = await this.http.get(environment.apiHost + environment.apiUserValidation, {headers: header, params: params, observe: "response"}).toPromise();

      console.log(response.body);

      if (response == null || response == undefined){
        responseLogin = {cod_resultado: "ERR", desc_respuesta: "Usuario no encontrado"};
      } else {
        if (response.body.password != txtPassword || response.body.username != txtUsuario) {
          responseLogin = {cod_resultado: "ERR", desc_respuesta: "Usuario o Password incorrecto"};
        }
        else {
          localStorage.setItem("usuario", JSON.stringify(response.body));
          responseLogin = {cod_resultado: "OK", desc_respuesta: ""};
        }
      }

      return responseLogin;
    }
    catch(e){
      console.log("ERROR RESPONSE", e);

      if (e.status == 404) {
        responseLogin = {cod_resultado: "ERR", desc_respuesta: "Usuario o Password incorrecto"};
      }
      else {
        if (e.status == 500) {
          responseLogin = {cod_resultado: "ERR", desc_respuesta: "Error al validar el usuario: " + e.message};
        }
      }

      return responseLogin;
    }
  }
}
