import { Component } from '@angular/core';

@Component({
  selector: 'app-input-property',
  standalone: false,

  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {
  text: string = '';

  background: string = '';
}
