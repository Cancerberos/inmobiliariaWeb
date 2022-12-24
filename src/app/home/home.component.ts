import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private login: LoginService, private route: Router) {
    this.isLogin = true;
    this.route.navigate(['/']);

    /*this.login.isAuthenticate().subscribe(
      login=>{
        let hayUsuario: any = JSON.parse(localStorage.getItem("usuario")!)

        if (hayUsuario == null || hayUsuario == undefined){
          this.isLogin = login;
        } else {
          this.isLogin = login;
        }
        this.route.navigate(['/']);
      })*/
  }

  ngOnInit(): void {
  }

}
