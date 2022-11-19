import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AvisosService } from 'src/app/services/avisos.service';
import { Avisos } from 'src/app/interfaces/avisos';
import { Inmuebles } from '../../interfaces/avisos';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.css']
})
export class ListaAvisosComponent implements OnInit {

  public avisos: Avisos[] = [];
  public image: any;

  constructor(private avisosService: AvisosService, private sanitizer: DomSanitizer) {
    this.getAllAvisos();
  }

  getAllAvisos() {
    this.avisosService.getAll().then((response: any) => this.avisos = response);

    return this.avisos;
  }

  getImagenesAvisos(image: string): any {
    console.log(image);
    let blobImage: Blob = new Blob([image]);
    console.log("BLOP", blobImage);
    let objectURL = URL.createObjectURL(blobImage);

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log("URL", url);

    return url;
  }

  ngOnInit(): void {
  }

}
