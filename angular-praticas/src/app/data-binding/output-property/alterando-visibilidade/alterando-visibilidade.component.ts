import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alterando-visibilidade',
  standalone: false,

  templateUrl: './alterando-visibilidade.component.html',
  styleUrl: './alterando-visibilidade.component.css'
})
export class AlterandoVisibilidadeComponent {
  @Output() visibilidade = new EventEmitter();

  isVisivel: boolean = true;

  alternar(){
    this.isVisivel = !this.isVisivel;
    this.visibilidade.emit(this.isVisivel);
  }
}
