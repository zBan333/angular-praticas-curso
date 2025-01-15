import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: false,

  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent implements OnInit {

  items: string[] = [ 'item', 'item', 'item', 'item', 'item', 'item' ];

  numbers: number[] = [10, 20, 30 , 40];

  usuarios: any[] = [
    { name: 'João', age: 15 },
    { name: 'Ana', age: 30 },
    { name: 'Maria', age: 45 },

  ];

  numeros: number[] = [10, 20, 30, 5, 40];
  ngOnInit() {
    for (let i = 0; i < this.items.length; i++){
      let item = this.items[i];
    }
  }

  constructor(){

  }
}
