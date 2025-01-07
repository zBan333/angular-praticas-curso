import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  standalone: false,

  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() items: string[] = [];
}
