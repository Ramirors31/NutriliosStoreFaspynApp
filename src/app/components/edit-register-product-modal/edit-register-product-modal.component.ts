import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-register-product-modal',
  templateUrl: './edit-register-product-modal.component.html',
  styleUrls: ['./edit-register-product-modal.component.scss'],
})
export class EditRegisterProductModalComponent implements OnInit {

  productName:string;
  productDescription:string;
  productCategogy: string;
  productInitialStock: number;
  productMinimunRequired: number;
  productPurchasePrice: number;
  productSalePrice: number;

  ngOnInit() {
    if (this.itemToEdit) {
      this.productName = this.itemToEdit.productName
      this. productDescription = this.itemToEdit.description;
      this.productCategogy = this.itemToEdit.category;
      this.productInitialStock = this.itemToEdit.stock;
      this.productPurchasePrice = this.itemToEdit.adquisicionPrice;
      this.productSalePrice = this.itemToEdit.sellingPrice;
    }
  }
  text: string;
  productCategories = ["Libros", "Material de laboratorio", "Manuales", "Material escolar", "Souvenirs", "Ropa"]
  @Output() closeProductModal: EventEmitter<any> = new EventEmitter();
  @Output() saveNewProduct: EventEmitter<any> = new EventEmitter();
  @Input() itemToEdit: any;

  constructor(private modalController: ModalController) {

  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveProduct(){
    this.saveNewProduct.emit({
      productCode: "SI134",
      productName: this.productName,
      stock: this.productInitialStock,
      adquisicionPrice: this.productPurchasePrice,
      sellingPrice: this.productSalePrice,
      description: this.productDescription,
      category: this.productCategogy,
    });
    this.closeProductModal.emit(false);
  }

  editProduct() {
    
  }

}
