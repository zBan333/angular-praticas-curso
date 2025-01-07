import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conteudo-visivel',
  standalone: false,

  templateUrl: './conteudo-visivel.component.html',
  styleUrl: './conteudo-visivel.component.css'
})
export class ConteudoVisivelComponent {
  @Input() visivel: boolean = false;
}
