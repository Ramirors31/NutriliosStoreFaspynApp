import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SalidaDetallesComponent } from 'src/app/components/salida-detalles/salida-detalles.component';
import { DatabaseService } from 'src/services/database.service';
/**
 * Generated class for the SalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss']
})
export class SalidasPage implements OnInit {
  tableHeaders: any = ["ID venta", "Fecha", "Vendedor", "Monto", 'Tipo salida', "Detalles"];
  salidasRegistradas: any;
  showSaleDetails: any = false;
  selectedSaleData:  any = {};
  constructor(public dbService: DatabaseService, public modalController: ModalController) {}
  async ngOnInit() {
    this.salidasRegistradas = await this.dbService.readTableData('salidas');
  }

  closeSalesDetailsModal() {
    this.salesDetailsModal.dismiss();
  }

  salesDetailsModal: any;
  async openSalesDetails(sale) {
    const salida = JSON.parse(JSON.stringify(sale));
    salida.salida_productos = JSON.parse(salida.salida_productos);
    this.selectedSaleData = salida;
    this.showSaleDetails = true;
    this.salesDetailsModal = await this.modalController.create({
      component: SalidaDetallesComponent,
      componentProps: {
        saleData: salida,
        closeSalesDetailsModal: this.closeSalesDetailsModal.bind(this),
      }
    });
    return await this.salesDetailsModal.present();
  }

}
