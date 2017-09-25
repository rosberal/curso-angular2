
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';



@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent

  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),CarouselModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
