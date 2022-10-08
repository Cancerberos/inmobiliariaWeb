import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isLogin: Boolean = false;
  public txtUsuario: String = "";
  public descPerfil: String = "";
  public perfilUsuario: number = 0;

  constructor(private login: LoginService,
              private authService: AuthService,
              private route: Router) {
    this.login.isAuthenticate().subscribe(
      login=>{
        let hayUsuario: any = JSON.parse(localStorage.getItem("usuario")!)

        if (hayUsuario == null || hayUsuario == undefined){
          this.isLogin = login;
        } else {
          this.isLogin = login;
          this.txtUsuario = hayUsuario.apellido + ", " + hayUsuario.nombre;
          this.perfilUsuario = hayUsuario.perfiles[0].idPerfil;
          this,this.descPerfil = hayUsuario.perfiles[0].descripcionPerfil;
        }
      })
  }

  ngOnInit(): void {
  }

  async logout(){
    let loginName: any = JSON.parse(localStorage.getItem("loginname")!);

    const responseLogOut: any = await this.login.logout(loginName);

    if (responseLogOut.cod_resultado == "OK"){
      localStorage.removeItem("usuario");
      localStorage.removeItem("loginname");
      this.isLogin = false;
    }
    else {
      this.isLogin = true;
    }
  }
}
