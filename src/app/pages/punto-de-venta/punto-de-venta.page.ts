import { Component, OnInit } from '@angular/core';
import { POSService } from 'src/services/pos.service';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.page.html',
  styleUrls: ['./punto-de-venta.page.scss'],
})
export class PuntoDeVentaPage implements OnInit {

  saleOptions = ['Venta', 'Cortesía', 'Merma'];
  selectedSaleOption: any = 'Venta';

  saleTableHeaders = ['Nombre del producto', 'Unidades', 'Precio de venta', 'Subtotal', 'Eliminar'];
  inventaryTableHeaders = ['Código','Nombre del producto', 'Precio de venta', 'Seleccionar'];
  addProductTableHeaders = ['Producto', 'Código', 'Unidades', ''];
  filterItems: any = '';
  itemsIncludedInSale: any = [];
  productsAvailableForSale: any;
  dataLoaded: boolean;
  constructor(public posService: POSService) { }

  async ngOnInit(): Promise<void> {
      this.productsAvailableForSale = await this.posService.getProductsForSale();
      this.dataLoaded = true;
    }

  deleteItemFromSale(itemName){
    this.itemsIncludedInSale = this.itemsIncludedInSale.filter((item) => item.product_name !== itemName);
  }

  saleCompleted: any;
  completeSale(){
    let dateRef = new Date();
    let saleObj = {
      items: this.itemsIncludedInSale,
      saleDate: `${dateRef.getDate()}/${dateRef.getMonth() + 1}/2022`,
      saleHour: `${dateRef.getHours()}:${dateRef.getMinutes()}`,
      seller: 'Usuario anónimo',
      total: this.saleTotal(),
      type: this.selectedSaleOption,
    }
    this.saleCompleted = saleObj;
    const saleTicket = document.querySelector('.ticketDeCompra');
    this.printTicket(saleTicket);
    console.log(saleObj);
  }

  printTicket(elemento) {
    let ventana = window.open('', 'PRINT', 'height=400,width=600');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="stylesheet" href="ticket-de-compra.css">');
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = () => {
      ventana.print();
      ventana.close();
    };
    return true;
  }

  addProductToSale(selectedItem){
    this.itemsIncludedInSale.push({
      product_name: this.selectedItem.product_name,
      unites: this.selectedItemUnits,
      sellingPrice: this.selectedItem.product_sellingprice,
      subtotal: this.selectedItemUnits * this.selectedItem.product_sellingprice,
    });
  }

  cashReceivment: any;
  getCashback(){
    let cashBack = this.saleTotal()- this.cashReceivment;
    if (isNaN(cashBack)){
      return 0;
    };
    if (this.cashReceivment < this.saleTotal()){
      return '';
    }
    return (cashBack) * -1;
  }

  saleTotal(){
    let total = 0;
    this.itemsIncludedInSale.forEach((item) => {
      total += item.subtotal;
    });
    return total;
  }

  selectedItem:any = {};
  selectedItemUnits: any = 0;
  selectProduct(selectedProduct){
    this.selectedItem.product_name = selectedProduct.product_name;
    this.selectedItem.productCode = selectedProduct.productCode;
    this.selectedItem.product_sellingprice = selectedProduct.product_sellingprice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntoDeVentaPage');
  }

}
