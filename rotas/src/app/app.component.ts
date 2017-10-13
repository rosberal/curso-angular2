import { AuthService } from './login/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

mostrarMenu: boolean = false;

constructor(private authService: AuthService) {}

ngOnInit() {
this.authService.mostrarMenuEmitter.subscribe(
  mostrar => this.mostrarMenu = mostrar
);
}

ngOnDestroy() {
  this.authService.mostrarMenuEmitter.unsubscribe();
}

}
