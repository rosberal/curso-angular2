// import { HttpModule } from '@angular/http';
import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
    // HttpModule
  ],
  declarations: [
    FormDebugComponent
  ],
exports: [
  FormDebugComponent
],
providers: [
  DropdownService
]
})
export class SharedModule { }
