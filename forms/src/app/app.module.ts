//import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormModule } from './template-form/template-form.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataFormModule } from './data-form/data-form.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateFormModule,
    DataFormModule,
  //  HttpModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
