import { Component } from '@angular/core';


@Component({
  selector: 'app-componente-filho01',
  standalone: false,

  templateUrl: './componente-filho01.component.html',
  styleUrl: './componente-filho01.component.css'
})
export class ComponenteFilho01Component {
  title: string = 'Titulo componente filho'

  exibirMensagem(){
    console.log('Mensagem do componente Filho');

  }
}
