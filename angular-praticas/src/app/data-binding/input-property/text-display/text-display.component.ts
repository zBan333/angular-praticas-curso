import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  standalone: false,

  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.css'
})
export class TextDisplayComponent {
  @Input('text') text: string = '';
}
