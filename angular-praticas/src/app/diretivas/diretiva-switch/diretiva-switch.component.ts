import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-switch',
  standalone: false,

  templateUrl: './diretiva-switch.component.html',
  styleUrl: './diretiva-switch.component.css'
})
export class DiretivaSwitchComponent {
  selectOption: string = '';

  componente: string = '';

  status: string = '';

  dia: number = 0;
}
