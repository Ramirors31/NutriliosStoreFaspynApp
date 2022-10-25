import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  apiURL = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  async readTableData(tablename: string) {
    const tableData = await this.http.post(this.apiURL + 'getAllTableData', {tableName: tablename}, {}).toPromise();
    console.log(tableData);
    return tableData;
  }

  async updateRecord(tablename: string, recordID, updateData, identifier) {
    const updateInsertData = {
      tableName: tablename,
      tableColumns: Object.keys(updateData),
      updateValues: Object.values(updateData),
      recordID,
      identifier,
    };
    const updateRecordResponse = await this.http.post(this.apiURL + 'updateTableRecord', updateInsertData, {}).toPromise();
    if (updateRecordResponse) {
      return true;
    } else {
      return false;
    }
  }

  async insertRecordToDB(productData, tableName: string): Promise<any> {
    const insertData = {
      tableName,
      tableColumns: Object.keys(productData),
      insertValues: Object.values(productData),
    };
    const addProductResponse = await this.http.post(this.apiURL + 'insertIntoDB', insertData, {}).toPromise();
    if (addProductResponse) {
      return addProductResponse;
    } else {
      return false;
    }
  }

  async readSpecificTableColumns(tableName: string, columnsToRead) {
    const payload = {
      tableName: 'products',
      columnsToRead: ['product_id', 'product_name', 'product_sellingprice'],
      action: 'getProductsForSale'
    };
    const readTableResponse = await this.http.post(this.apiURL + 'pointOfSale', payload, {}).toPromise();
    if (readTableResponse) {
      return readTableResponse;
    } else {
      return false;
    }
  }
}
