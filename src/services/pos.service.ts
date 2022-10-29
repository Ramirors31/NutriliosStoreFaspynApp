import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class POSService {

  constructor(private http: HttpClient, private dbService: DatabaseService) { }

  async getProductsForSale() {
    const payload = {
      params: {
        tableName: 'products',
        columnsToRead: JSON.stringify(['product_id', 'product_name', 'product_sellingprice']),
      },
      action: 'getProductsForSale'
    };
    const readTableResponse = await this.http.post(this.dbService.apiURL + 'pointOfSale', payload, {}).toPromise();
    if (readTableResponse) {
      console.log(readTableResponse);
      return readTableResponse;
    } else {
      return false;
    }
  }

  async completeSale(saleData) {
    const insertResponse = await this.dbService.insertRecordToDB(saleData, 'salidas');
    if (insertResponse) {
      return true;
    } else {
      return false;
    }
  }
}
