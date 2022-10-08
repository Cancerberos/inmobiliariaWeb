import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { AvisosService } from 'src/app/services/avisos.service';
import { Avisos } from '../../interfaces/avisos';
import { ConsultaAvisoComponent } from '../consulta-aviso/consulta-aviso.component';

@Component({
  selector: 'app-detalle-aviso',
  templateUrl: './detalle-aviso.component.html',
  styleUrls: ['./detalle-aviso.component.css']
})
export class DetalleAvisoComponent implements OnInit {
  public aviso: Avisos;
  private idAviso: number;

  constructor(private activeRoute: ActivatedRoute,
              private avisosService: AvisosService,
              private http: HttpClient,
              private dialog: MatDialog,
              private router: Router,
              private sanitizer: DomSanitizer) {
    const id = this.activeRoute.snapshot.paramMap.get("id");

    if (id) {
      this.idAviso = parseInt(id);
      this.getAvisoById(parseInt(id));
    }
  }

  getAvisoById(id: number) {
    //this.avisosService.getById(id);
    this.http.get(environment.urlAvisos).subscribe((data: any) => {
      this.aviso = data;
      data.forEach(element => {
        if (element.id == id) {
          this.aviso = element;
        }
      });
    });

    //console.log("getAllAvisosdel orto", this.avisos);
    //return this.avisos;
  }

  /*getImagenesAvisos(image: string): any {
    console.log(image);
    let blobImage: Blob = new Blob([image]);
    console.log("BLOP", blobImage);
    let objectURL = URL.createObjectURL(blobImage);

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log("URL", url);

    return url;
  }*/

  consultaAviso(){
    const dialogRef = this.dialog.open(ConsultaAvisoComponent, {
      width: '500px',
      data: {descripcionAviso: this.aviso.descripcion}
    });

    /*dialogRef.afterClosed().subscribe(result => {
      this.getCanales();
    });*/
  }

  volver() {
    this.router.navigate(['./'])
  }

  ngOnInit(): void {
  }

}
