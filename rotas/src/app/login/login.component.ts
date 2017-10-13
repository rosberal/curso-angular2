import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) { }
  private usuario = new Usuario();

  ngOnInit() {


  }

  fazerLogin() {
// console.log(this.usuario);
this.authService.fazerLogin(this.usuario);
}
}
