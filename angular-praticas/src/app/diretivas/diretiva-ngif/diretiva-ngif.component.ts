import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: false,

  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  isRed: boolean = false;

  fontSize: number = 16;

  isHighLight: boolean = false;

  bgColor: string = 'white';

  mudarCor() {
    this.isRed = !this.isRed;
  }

  aumentarFonte() {
    this.fontSize++;
  }

  diminuirFonte() {
    this.fontSize--;
  }

  mudarDestaque() {
    this.isHighLight = !this.isHighLight;
  }

  mudarBgColor(color: string) {
    this.bgColor = color;
  }
}
