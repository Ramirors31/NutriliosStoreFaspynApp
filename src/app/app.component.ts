import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inventario', url: '/inventario-actual', icon: 'mail' },
    { title: 'Cortes Administrativos', url: '/cortes-administrativos', icon: 'paper-plane' },
    { title: 'Punto de venta', url: '/punto-de-venta', icon: 'heart' },
    { title: 'Órdenes', url: '/folder/Archived', icon: 'archive' },
    { title: 'Salidas', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
