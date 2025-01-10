import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Minhas praticas com angular';

  componentActive: string = '';

  trianguleImage: string = 'https://www.iconpacks.net/icons/1/free-error-icon-905-thumb.png';
}
