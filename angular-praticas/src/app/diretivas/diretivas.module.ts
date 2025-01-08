import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { Filho02Component } from './diretiva-ngif/filho02/filho02.component';



@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivaNgifComponent,
    Filho02Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
