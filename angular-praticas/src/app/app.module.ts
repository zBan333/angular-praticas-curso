import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    DiretivasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
