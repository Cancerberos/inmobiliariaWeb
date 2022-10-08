import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avisos } from '../interfaces/avisos';
import { environment } from 'src/environments/environment';
import { elementAt } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(private http: HttpClient) { }

 getAll() {
    return this.http.get(environment.urlAvisos);
  }

  //getById(id: number, listaAvisos: Avisos[]) {
  getById(id: number) {
    let avisos: Avisos[] = [];

    /*this.http.get(environment.urlAvisos).subscribe((data: any) => {
      console.log(data);
      avisos = data;
      data.forEach(element => {
        console.log("ID", element.id);
        if (element.id == id) {
          avisos = element;
          console.log("AVISOS", avisos);
        }
      });
    });*/

    return this.http.get(environment.urlAvisos).toPromise();

    //this.getAll().subscribe((response: any) => listaAvisos = response);

    /*console.log("getAll de getById", listaAvisos);

    listaAvisos.forEach(element => {
      console.log("ID", element.id)
      if (element.id == id) {
        avisos = element;
        return avisos;
      }
      else {
        return null;
      }
    });

    return avisos;*/
    /*console.log("return getById", element);
    return element;*/
  }
}
