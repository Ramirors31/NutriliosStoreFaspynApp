/* eslint-disable prefer-const */
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
import { InventaryService } from 'src/services/inventary.service';

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
    public inventaryService: InventaryService,
    ) {
  }

  async ngOnInit() {
      this.registeredProducts = await this.databaseService.readTableData('products');
    }

  searchProduct(){
    console.log('buscando producto we');
  }

  closeProductRegisterModal() {
    this.showEditRegisterModal.dismiss();
  }

  addProductFn(addedProduct) {
    this.registeredProducts.push(addedProduct);
  }

  showEditRegisterModal: any;
  async openProductRegisterModal(opType: string, itemToEdit?: any){
    if (itemToEdit) {
      this.seletecItemToEdit = itemToEdit;
    }
    let modalContainer: any = {};
    this.showEditRegisterModal = await this.modalController.create({
      component: EditRegisterProductModalComponent,
      componentProps: {
        opType: opType,
        itemToEdit,
        modalContainer,
        saveEditProductModalFn: this.saveEditProductModalFn.bind(this),
        closeModalFn: this.closeProductRegisterModal.bind(this),
        addProductFn: this.addProductFn.bind(this),
      }
    });
    return await this.showEditRegisterModal.present();
  }

  filterItems: any = '';
  saveEditProductModalFn(productID, productData) {
    const editedProductIndex = this.registeredProducts.findIndex((product) => product.product_id === productID);
    this.registeredProducts[editedProductIndex] = productData;
    console.log(editedProductIndex);
  }

  closeModal($event) {
    this.showEditRegisterModal = $event;
  };

  closeIncomingsModal($event) {
    this.showProductEntriesModal = $event;
  }

  saveProductMock($event) {
    this.registeredProducts.push($event);
  };

  async deleteItem(productID: string, productName: string) {
    const alert = await this.alertController.create({
      message: `Está a punto de eliminar ${productName} del inventario, ¿Desea continuar?`,
      buttons: [
        {
        text: 'Confirmar',
        handler: () => {
          this.deleteInventaryItem(productID);
          // this.registeredProducts = this.registeredProducts.filter((item) => item.product_id !== productID);
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

  deleteInventaryItem(productID) {
  const deleteProductResponse = this.inventaryService.deleteInventaryProduct(productID);
  if (deleteProductResponse) {
    const deletedProductIndex = this.registeredProducts.findIndex((product) => product.product_id === productID);
    this.registeredProducts.splice(deletedProductIndex, 1);
  }
  }
  showProductEntriesModal: any;
  displayProductEntriesModal() {
    this.showProductEntriesModal = true;
  }

}
