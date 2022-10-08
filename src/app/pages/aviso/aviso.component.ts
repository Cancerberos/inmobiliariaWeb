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

  /*getImagenesAvisos(image: string): any {
    console.log(image);
    let blobImage: Blob = new Blob([image]);
    console.log("BLOP", blobImage);
    let objectURL = URL.createObjectURL(blobImage);

    let url: any = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log("URL", url);

    return url;
  }*/

  ngOnInit(): void {
  }

}
