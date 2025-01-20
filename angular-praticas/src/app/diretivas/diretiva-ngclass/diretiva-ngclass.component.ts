import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: false,

  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.css'
})
export class DiretivaNgclassComponent {
  isRed: boolean = false;

  number: number = 5;

  items: string[]= ['item 01', 'item 02', 'item 03','item 04', ' item 05', 'item 06'];
  itemSelecionado: number | null = null;

  textBold: boolean = false;
  textItalic: boolean = false;
  textUnderline: boolean = false;

  toggleText(){
    this.isRed = !this.isRed;
  }

  toggleNumber(){
    this.number = Math.floor(Math.random() * 30);
  }

  selecionarItem(index: number){
    this.itemSelecionado = index;
  }

  toggleBold(){
    this.textBold = !this.textBold;
  }

  toggleItalic(){
    this.textItalic = !this.textItalic;
  }

  toggleUnderline(){
    this.textUnderline = !this.textUnderline;
  }
}
