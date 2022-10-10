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
  public panelOpenState = false;
  public latitudInmueble: number;
  public longitudInmueble: number;
  public map: any;

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
          this.latitudInmueble = parseInt(element.inmueble.latitud);
          this.longitudInmueble = parseInt(element.inmueble.longitud);
        }
      });
    });
  }

  getImagenesAvisos(image: any, type: string): any {
    let objectURL = 'data:' + type +';base64,' + image;

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    return url;
  }

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
