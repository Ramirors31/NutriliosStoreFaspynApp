import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.page.html',
  styleUrls: ['./punto-de-venta.page.scss'],
})
export class PuntoDeVentaPage {

  constructor() { }
  saleOptions = ['Venta', 'Cortesía', 'Merma'];
  selectedSaleOption: any = 'Venta';
  mockInventaryData = [
    {
      productCode: "LIB31",
      productName: "Libro competencia comunicativa",
      stock: 32,
      adquisicionPrice: 80,
      sellingPrice: 200,
      description: "Libro de competencia Comunicativa de la UANL",
      category: "Libros"
    },
    {
      productCode: "LIB41",
      productName: "Libro Apreciacion de las artes",
      stock: 32,
      adquisicionPrice: 80,
      sellingPrice: 200,
      description: "Libro de Apreciacion de las artes de la UANL",
      category: "Libros"
    },
    {
      productCode: "TERM12",
      productName: "Termo nutria FASPYN",
      stock: 10,
      adquisicionPrice: 120,
      sellingPrice: 250,
      description: "Termo de 600ml con la mascota de la FAPSYN",
      category: "Souvenirs"
    },
    {
      productCode: "LAP32",
      productName: "Lápiz de #2",
      stock: 180,
      adquisicionPrice: 1.50,
      sellingPrice: 6,
      description: "Lápiz de grafito del #2 marca mirado",
      category: "Útiles escolares"
    },
    {
      productCode: "MAN76",
      productName: "Manual de prácticas laboratorio",
      stock: 300,
      adquisicionPrice: 30,
      sellingPrice: 60,
      description: "Manual de prácticas para laboratorio de nutrición",
      category: "Manuales"
    },
    {
      productCode: "CUA31",
      productName: "Cuaderno",
      stock: 32,
      adquisicionPrice: 15,
      sellingPrice: 35,
      description: "Cuaderno de 100 hojas",
      category: "Material escolar"
    },
    {
      productCode: "PLUM12",
      productName: "Pluma",
      stock: 32,
      adquisicionPrice: .50 ,
      sellingPrice: 10,
      description: "Pluma de colores BIC",
      category: "Material escolar"
    },
    {
      productCode: "CAM32",
      productName: "Camisa de generación",
      stock: 45,
      adquisicionPrice: 110,
      sellingPrice: 250,
      description: "Camisa de la generación XXII",
      category: "Souvenirs"
    },
    {
      productCode: "MEDPH12",
      productName: "Medidor de PH",
      stock: 32,
      adquisicionPrice: 80,
      sellingPrice: 120,
      description: "Instrumento para medir pH",
      category: "Material escolar"
    },
  ]

  saleTableHeaders = ['Nombre del producto', 'Unidades', 'Precio de venta', 'Subtotal', 'Eliminar'];
  inventaryTableHeaders = ['Código','Nombre del producto', 'Precio de venta', 'Seleccionar'];
  addProductTableHeaders = ['Producto', 'Código', 'Unidades', ''];

  filterItems: any = '';
  itemsIncludedInSale:any = [];

  deleteItemFromSale(itemName){
    this.itemsIncludedInSale = this.itemsIncludedInSale.filter((item) => item.productName != itemName);
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
    ventana.onload = function() {
      ventana.print();
      ventana.close();
    };
    return true;
  }
  
  addProductToSale(selectedItem){
    this.itemsIncludedInSale.push({
      productName: this.selectedItem.productName,
      unites: this.selectedItemUnits,
      sellingPrice: this.selectedItem.sellingPrice,
      subtotal: this.selectedItemUnits * this.selectedItem.sellingPrice,
    });
  }

  cashReceivment: any;
  getCashback(){
    let cashBack = this.saleTotal()- this.cashReceivment
    if (isNaN(cashBack)){
      return 0;
    } 
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
    this.selectedItem.productName = selectedProduct.productName;
    this.selectedItem.productCode = selectedProduct.productCode;
    this.selectedItem.sellingPrice = selectedProduct.sellingPrice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntoDeVentaPage');
  }

}
