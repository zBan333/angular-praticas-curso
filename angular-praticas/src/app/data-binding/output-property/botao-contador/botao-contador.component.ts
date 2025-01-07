import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-contador',
  standalone: false,

  templateUrl: './botao-contador.component.html',
  styleUrl: './botao-contador.component.css'
})
export class BotaoContadorComponent {
  valor: number = 0;

  @Output() contador = new EventEmitter();

  Incrementa(){
    this.valor++;
    this.contador.emit(this.valor);
  }
}
