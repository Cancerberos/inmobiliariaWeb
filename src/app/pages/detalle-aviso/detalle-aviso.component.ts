import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { AvisosService } from 'src/app/services/avisos.service';
import { Avisos } from '../../interfaces/avisos';
import { ConsultaAvisoComponent } from '../consulta-aviso/consulta-aviso.component';
import { TipoCaracteristicas } from 'src/app/interfaces/tipo-caracteristicas';

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

  private tipoCaracteristicas: TipoCaracteristicas[] = [
    {
      descCaracteristica: "BAÑO",
      icono: "bathtub"
    },
    {
      descCaracteristica: "HABITACION",
      icono: "bed"
    },
    {
      descCaracteristica: "QUINCHO",
      icono: "outdoor_grill"
    },
    {
      descCaracteristica: "PISCINA",
      icono: "pool"
    },
    {
      descCaracteristica: "COCHERA",
      icono: "garage"
    },
    {
      descCaracteristica: "WIFI",
      icono: "wifi"
    },
    {
      descCaracteristica: "TV CABLE",
      icono: "tv"
    },
    {
      descCaracteristica: "CALEFACCION",
      icono: "ac_unit"
    },
    {
      descCaracteristica: "BALCON",
      icono: "balcony"
    },
    {
      descCaracteristica: "METROS 2",
      icono: "straighten"
    }
  ];

  constructor(private activeRoute: ActivatedRoute,
              private avisosService: AvisosService,
              private http: HttpClient,
              private dialog: MatDialog,
              private router: Router,
              private sanitizer: DomSanitizer) {
    const id = this.activeRoute.snapshot.paramMap.get("id");

    if (id) {
      console.log("Id Aviso " + id);
      this.getAvisoById(id);
    }
  }

  async getAvisoById(id: string) {
    await this.avisosService.getById(id).then((response: any) => this.aviso = response);

    console.log("AVISO x ID" + this.aviso.descripcion);
    return this.aviso;

    /*this.http.get(environment.urlAvisos).subscribe((data: any) => {
      this.aviso = data;
      data.forEach(element => {
        if (element.id == id) {
          this.aviso = element;
          this.latitudInmueble = parseInt(element.inmueble.latitud);
          this.longitudInmueble = parseInt(element.inmueble.longitud);
        }
      });
    });*/
  }

  getImagenesAvisos(image: any, type: string): any {
    let objectURL = 'data:' + type +';base64,' + image;

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    return url;
  }

  consultaAviso(){
    const dialogRef = this.dialog.open(ConsultaAvisoComponent, {
      width: '500px',
      data: {idAviso: this.aviso.aviso_Id, descripcionAviso: this.aviso.descripcion}
    });

    /*dialogRef.afterClosed().subscribe(result => {
      this.getCanales();
    });*/
  }

  getIconoTipoCaracterisitica(desc: string) {
    const icono = this.tipoCaracteristicas.find((element) => element.descCaracteristica === desc).icono;

    return icono;
  }

  volver() {
    this.router.navigate(['./'])
  }

  ngOnInit(): void {
  }

}
