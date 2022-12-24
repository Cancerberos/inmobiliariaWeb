import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConsultaAviso } from '../interfaces/consulta-aviso';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAvisoService {

  constructor(private httpClient: HttpClient) { }

  async addAvisoContacto(consultaAviso: ConsultaAviso) {

    const auth: string = "Basic " +  environment.apiAuth;
    const header = new HttpHeaders({"Authorization": auth, "Accept": environment.apiAccept});

    const body = JSON.stringify(consultaAviso);
    console.log("Body", body);

    return await this.httpClient.put(environment.apiHost + environment.apiAvisoContacto, body, {headers: header}).toPromise();
  }
}
