/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { EditRegisterProductModalComponent } from 'src/app/components/edit-register-product-modal/edit-register-product-modal.component';
import { Product } from 'src/models/Product';
import { DatabaseService } from 'src/services/database.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'page-inventario-actual',
  templateUrl: 'inventario-actual.page.html',
  styleUrls: ['./inventario-actual.page.scss'],
})
export class InventarioActualPage implements OnInit {

  // eslint-disable-next-line max-len
  inventaryTableHeaders = ["ID Producto", "Nombre Producto","Descripción","Categoría","Cantidad en Stock", "Precio Unitario", "Precio de venta", "Acciones"];
  registeredProducts: any;
  seletecItemToEdit: any;

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public databaseService: DatabaseService,
    ) {
  }

  async ngOnInit() {
      this.registeredProducts = await this.databaseService.getInventaryData();
    }

  searchProduct(){
    console.log('buscando producto we');
  }

  showEditRegisterModal: any;
  async openProductRegisterModal(opType: string, itemToEdit?: any){
    if (itemToEdit) {
      this.seletecItemToEdit = itemToEdit;
    }
    const modal = await this.modalController.create({
      component: EditRegisterProductModalComponent,
      componentProps: {
        opType: opType,
        itemToEdit: itemToEdit,
      }
    });
    return await modal.present();
  }

  filterItems: any = '';

  closeModal($event) {
    this.showEditRegisterModal = $event;
  };

  closeIncomingsModal($event) {
    this.showProductEntriesModal = $event;
  }

  saveProductMock($event) {
    this.registeredProducts.push($event);
  };

  async deleteItem(itemCode: string) {
    const alert = await this.alertController.create({
      message: `Está a punto de eliminar ${itemCode} del inventario, ¿Desea continuar?`,
      buttons: [
        {
        text: 'Confirmar',
        handler: () => {
          this.registeredProducts = this.registeredProducts.filter((item) => item.productName !== itemCode);
        }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            return;
          }
        }
      ]
    });
    await alert.present();
  }

  showProductEntriesModal: any;
  displayProductEntriesModal() {
    this.showProductEntriesModal = true;
  }

}
