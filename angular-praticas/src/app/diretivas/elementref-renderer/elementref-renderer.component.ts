import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-elementref-renderer',
  standalone: false,

  templateUrl: './elementref-renderer.component.html',
  styleUrl: './elementref-renderer.component.css'
})
export class ElementrefRendererComponent implements AfterViewInit {

  constructor(
    private ElementRef: ElementRef,
    private Renderer2: Renderer2
  ){ }

  ngAfterViewInit(): void {
    const paragrafo01 = this.ElementRef.nativeElement.querySelector('#paragrafo01');
    this.Renderer2.setStyle(
      paragrafo01,
      'background-color',
      '#ededed'
    )
  }

  carregarClasse(){
    const paragrafo02 = this.ElementRef.nativeElement.querySelector('#paragrafo02');
    this.Renderer2.addClass(
      paragrafo02,
      'destaque'
    )
  }

  adicionarElemento(){
    const container = this.ElementRef.nativeElement.querySelector('#container');
    const novoElemento = this.ElementRef.nativeElement.querySelector('#container');
    this.Renderer2.addClass(novoElemento, 'novo-item');
    const texto = this.Renderer2.createText('Novo elemento adicionado!');
    this.Renderer2.appendChild(novoElemento , texto);
    this.Renderer2.appendChild(container, novoElemento)
  }

  habilitarBotao() {
    const button = this.ElementRef.nativeElement.querySelector('button:last-child');
    this.Renderer2.removeAttribute(button, 'disabled');
  }
}
