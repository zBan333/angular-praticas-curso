import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-action',
  standalone: false,

  templateUrl: './notification-action.component.html',
  styleUrl: './notification-action.component.css'
})
export class NotificationActionComponent {
  @Output() emitNotification = new EventEmitter();

  notificar(){
    this.emitNotification.emit('Notificação realizada no filho');
  }
}
