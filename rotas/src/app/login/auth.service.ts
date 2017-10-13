import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {
  private usuarioAutenticado: boolean = false;
mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
      this.mostrarMenuEmitter.emit(true);


    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
usuarioEstaAutenticado() {
 return this.usuarioAutenticado;
}

}


