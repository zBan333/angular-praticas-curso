import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  standalone: false,

  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent {

  bgColor: boolean = false;

  toggleColor(){
    this.bgColor = !this.bgColor
  }
}
