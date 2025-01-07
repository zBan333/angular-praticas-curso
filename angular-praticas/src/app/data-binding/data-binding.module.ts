import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { BackgroundComponent } from './input-property/background/background.component';
import { TextDisplayComponent } from './input-property/text-display/text-display.component';
import { ItemListComponent } from './input-property/item-list/item-list.component';
import { ConteudoVisivelComponent } from './input-property/conteudo-visivel/conteudo-visivel.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { BotaoContadorComponent } from './output-property/botao-contador/botao-contador.component';
import { EnviandoTextoComponent } from './output-property/enviando-texto/enviando-texto.component';
import { AlterandoVisibilidadeComponent } from './output-property/alterando-visibilidade/alterando-visibilidade.component';
import { NotificationActionComponent } from './output-property/notification-action/notification-action.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ComponenteFilho01Component } from './viewchild/componente-filho01/componente-filho01.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputPropertyComponent,
    BackgroundComponent,
    TextDisplayComponent,
    ItemListComponent,
    ConteudoVisivelComponent,
    OutputPropertyComponent,
    BotaoContadorComponent,
    EnviandoTextoComponent,
    AlterandoVisibilidadeComponent,
    NotificationActionComponent,
    CicloComponent,
    ViewchildComponent,
    ComponenteFilho01Component,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent
  ],

})
export class DataBindingModule { }
