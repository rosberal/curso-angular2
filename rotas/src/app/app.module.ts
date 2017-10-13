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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    MaterializeModule,
   // CursosModule,
    // AlunosModule,
     AppRoutingModule,
     FormsModule
  ],
   providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
