import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: false,

  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  showText: boolean = false;

  showInput: boolean = false;

  showChild: boolean = false;

  showInfo: boolean = false;
  showBlock: boolean = true;

  toggleText(){
    this.showText = !this.showText;
  }

  toggleInput(){
    this.showInput = !this.showInput;
  }

  toggleChild(){
    this.showChild = !this.showChild;
  }

  toggleInfo(){
    this.showInfo = !this.showInfo;
    this.showBlock = !this.showBlock;
  }
}
