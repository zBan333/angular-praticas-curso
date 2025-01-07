import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';



@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivaNgifComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
