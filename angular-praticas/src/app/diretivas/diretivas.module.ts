import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { Filho02Component } from './diretiva-ngif/filho02/filho02.component';
import { DiretivaSwitchComponent } from './diretiva-switch/diretiva-switch.component';
import { FormsModule } from '@angular/forms';
import { Switch01Component } from './diretiva-switch/switch01/switch01.component';
import { Switch02Component } from './diretiva-switch/switch02/switch02.component';
import { Switch03Component } from './diretiva-switch/switch03/switch03.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContainerComponent } from './ng-content/container/container.component';
import { CardComponent } from './ng-content/card/card.component';
import { BoxComponent } from './ng-content/box/box.component';
import { ListComponent } from './ng-content/list/list.component';



@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivaNgifComponent,
    Filho02Component,
    DiretivaSwitchComponent,
    Switch01Component,
    Switch02Component,
    Switch03Component,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    ContainerComponent,
    CardComponent,
    BoxComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DiretivasComponent
  ]
})
export class DiretivasModule { }
