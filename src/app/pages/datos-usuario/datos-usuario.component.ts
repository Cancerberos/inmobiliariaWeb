import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
  public loginName: string = "";
  public apellido: string = "";
  public nombre: string = "";
  public mail: string = "";
  public descripcionPerfil: string = "";

  constructor() { }

  ngOnInit(): void {
    let usuario: any = JSON.parse(localStorage.getItem("loginname")!);
    let datosUsuario: any = JSON.parse(localStorage.getItem("usuario")!);
    this.loginName = usuario;
    this.apellido = datosUsuario.apellido;
    this.nombre = datosUsuario.nombre;
    this.mail = datosUsuario.mail;
  }

}
