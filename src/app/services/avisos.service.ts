import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(private http: HttpClient) {

  }

 async getAll() {
  let responseAvisos: any;

    try {
      const auth: any = "Basic " +  environment.apiAuth;
      const header = new HttpHeaders({"Authorization": auth, "Accept": environment.apiAccept});

      const response: any = await this.http.get(environment.apiHost + environment.apiAvisos, {headers: header, observe: "response"}).toPromise();

      if (response == null || response == undefined){
        responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Avisos no encontrados"};
      } else {
          responseAvisos = response.body;

          responseAvisos.forEach(async aviso => {
            console.log("inmueble", aviso.inmueble);

            //Obtengo los Inmuebles del Aviso
            await this.getApiByUrl(aviso.inmueble.href).then((response) => {
              aviso.inmueble = response;
              aviso.inmueble.imagen.forEach(imagen => {
                imagen.imagenDetalle = JSON.parse(imagen.url);
              });
            });

          });
      }

      console.log("responseAvisos", responseAvisos);

      return responseAvisos;
    }
    catch (e) {
      console.log("ERROR RESPONSE", e);

      if (e.status == 404) {
        responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Aviso no encontrado"};
      }
      else {
        if (e.status == 500) {
          responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Error al buscar avisos: " + e.message};
        }
      }

      return responseAvisos;
    }
  }

  async getApiByUrl(url: string) {
    let responseInmueble: any;

    try {

      let urlMethod: string = url.substring(url.search(environment.apiHost) + environment.apiHost.length, url.length);

      const auth: any = "Basic " +  environment.apiAuth;
      const header = new HttpHeaders({"Authorization": auth, "Accept": environment.apiAccept});

      const response: any = await this.http.get(environment.apiHost + urlMethod, {headers: header, observe: "response"}).toPromise();

      if (response == null || response == undefined){
        responseInmueble = {cod_resultado: "ERR", desc_respuesta: "Datos no encontrados"};
      } else {
        responseInmueble = response.body;
      }

      return responseInmueble;
    }
    catch (e) {
      console.log("getApiByUrl ERROR RESPONSE", e);

      if (e.status == 404) {
        responseInmueble = {cod_resultado: "ERR", desc_respuesta: "Aviso no encontrado"};
      }
      else {
        if (e.status == 500) {
          responseInmueble = {cod_resultado: "ERR", desc_respuesta: "Error al buscar avisos: " + e.message};
        }
      }

      return responseInmueble;
    }
  }

  async getById(id: string) {
    let responseAvisos: any;

    try {
      const auth: any = "Basic " +  environment.apiAuth;
      const header = new HttpHeaders({"Authorization": auth, "Accept": environment.apiAccept});
      //const param = new HttpParams().set("objectId", id);

      const response: any = await this.http.get(environment.apiHost + environment.apiAvisosById + id, {headers: header, observe: "response"}).toPromise();

      if (response == null || response == undefined){
        responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Avisos no encontrados"};
      } else {
          responseAvisos = response.body;
          console.log("responseAvisos " + responseAvisos.aviso_Id);

          console.log("aviso x ID", responseAvisos.inmueble);
          //Obtengo los Inmuebles del Aviso
          await this.getApiByUrl(responseAvisos.inmueble.href).then((response) => {
            responseAvisos.inmueble = response;
            responseAvisos.inmueble.imagen.forEach(imagen => {
              imagen.imagenDetalle = JSON.parse(imagen.url);
              console.log("IMAGEN URL", imagen.url);
            });
          });
      }

      console.log("responseAvisosById", responseAvisos);

      return responseAvisos;
    }
    catch (e) {
      console.log("ERROR RESPONSE", e);

      if (e.status == 404) {
        responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Aviso no encontrado"};
      }
      else {
        if (e.status == 500) {
          responseAvisos = {cod_resultado: "ERR", desc_respuesta: "Error al buscar avisos: " + e.message};
        }
      }

      return responseAvisos;
    }
  }
}
