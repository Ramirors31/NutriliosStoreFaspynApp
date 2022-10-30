import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the SaleDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-salidas-detalles',
  templateUrl: './salida-detalles.component.html',
  styleUrls: ['./salida-detalles.component.scss']
})
export class SalidaDetallesComponent{

  @Input() closeSalesDetailsModal: any;
  @Input() saleData: any;
  text: string;
  constructor() {
    console.log('Hello SaleDetailsComponent Component');
    this.text = 'Hello World';
  }

  closeModal() {
    this.closeSalesDetailsModal();
  }

}
