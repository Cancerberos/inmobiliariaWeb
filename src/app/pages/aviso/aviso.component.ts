import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Avisos } from 'src/app/interfaces/avisos';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {
  @Input() public esDetalle: boolean = false;
  @Input() public aviso!: Avisos;

  constructor(private sanitizer: DomSanitizer) { }

  getImagenesAvisos(image: any, type: string): any {
    let objectURL = 'data:' + type +';base64,' + image;

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    return url;
  }

  ngOnInit(): void {
  }

}
