/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/models/Product';
import { DatabaseService } from 'src/services/database.service';
import { InventaryService } from 'src/services/inventary.service';

@Component({
  selector: 'app-edit-register-product-modal',
  templateUrl: './edit-register-product-modal.component.html',
  styleUrls: ['./edit-register-product-modal.component.scss'],
})
export class EditRegisterProductModalComponent implements OnInit {

  @Input() itemToEdit?: any;
  @Input() closeModalFn: any;
  @Input() addProductFn: any;
  @Input() saveEditProductModalFn: any;
  productData: Product = {
    product_adquisitionprice: false,
    product_category: false,
    product_description: false,
    product_id: false,
    product_name : false,
    product_sellingprice : false,
    product_stock : false
  };
  text: string;
  productCategories = ["Libros", "Material de laboratorio", "Manuales", "Material escolar", "Souvenirs", "Ropa"];

  constructor(
    public databaseService: DatabaseService,
    public inventaryService: InventaryService,
    ) {

  }

  ngOnInit() {
    if (this.itemToEdit) {
      this.productData = JSON.parse(JSON.stringify(this.itemToEdit));
    }
  }

  async saveProduct(){
      const newProductData: any = {
        product_name: this.productData.product_name,
        product_stock: this.productData.product_stock,
        product_adquisitionprice: this.productData.product_adquisitionprice,
        product_sellingprice: this.productData.product_sellingprice,
        product_description: this.productData.product_description,
        product_category: this.productData.product_category,
      };
      const addProductResponse = await this.databaseService.insertRecordToDB(newProductData, 'products');
      if (addProductResponse.insertId) {
        newProductData.product_id = addProductResponse.insertId;
        this.addProductFn(newProductData);
        this.closeModalFn();
      }
  }

  async editProduct() {
    const productID = JSON.parse(JSON.stringify(this.productData.product_id));
    // eslint-disable-next-line prefer-const
    let editData = this.productData;
    const editProductResponse = await this.inventaryService.updateInventaryProduct(productID, editData);
    if (editProductResponse) {
      console.log('todobn');
      this.saveEditProductModalFn(productID, editData);
    } else {
      console.log('todo mal');
    }
  }
}
