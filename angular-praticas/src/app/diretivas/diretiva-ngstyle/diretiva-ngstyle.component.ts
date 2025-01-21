import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: false,

  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.css'
})
export class DiretivaNgstyleComponent {
  active: boolean = false;

  tamanhoFont: number = 12;

  isSolid: boolean = false;

  opacity: number = 1;

  toggleBackground(){
    this.active = !this.active
  }

  toggleBorder(){
    this.isSolid = !this.isSolid
  }
}
