import { AuthGuard } from './guards/auth.guard';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,


  ],
  imports: [
    BrowserModule,
    MaterializeModule,
   // CursosModule,
    // AlunosModule,
     AppRoutingModule,
     FormsModule
  ],
   providers: [
     AuthService,
     AuthGuard,
     CursosGuard,
     AlunosGuard,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
