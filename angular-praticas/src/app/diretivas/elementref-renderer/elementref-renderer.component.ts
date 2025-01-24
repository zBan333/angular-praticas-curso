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
    let paragrafo01 = this.ElementRef.nativeElement.querySelector('#paragrafo01');
    this.Renderer2.setStyle(
      paragrafo01,
      'background-color',
      '#ededed'
    )
  }

  carregarClasse(){
    let paragrafo02 = this.ElementRef.nativeElement.querySelector('#paragrafo02');
    this.Renderer2.addClass(
      paragrafo02,
      'destaque'
    )
  }
}
