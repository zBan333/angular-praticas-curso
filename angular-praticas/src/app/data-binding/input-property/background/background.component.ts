import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: false,

  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  @Input() background: string = '';
}
