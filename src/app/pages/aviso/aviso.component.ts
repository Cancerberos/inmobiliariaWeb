import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Avisos } from 'src/app/interfaces/avisos';
import { TipoCaracteristicas } from 'src/app/interfaces/tipo-caracteristicas';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {
  @Input() public esDetalle: boolean = false;
  @Input() public aviso!: Avisos;

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

  constructor(private sanitizer: DomSanitizer) {

  }

  getImagenesAvisos(image: any, type: string): any {
    let objectURL = 'data:' + type +';base64,' + image;

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    return url;
  }

  getIconoTipoCaracterisitica(desc: string) {
    const icono = this.tipoCaracteristicas.find((element) => element.descCaracteristica === desc).icono;

    return icono;
  }

  ngOnInit(): void {

  }

}
