import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class InventaryService {

  constructor(public http: HttpClient, public databaseService: DatabaseService) { }

  async updateInventaryProduct(productID, updateData) {
    const data = {
      updateData,
      productID
    };
    const updateResponse = await this.http.post(this.databaseService.apiURL + 'updateInventaryProduct', data).toPromise();
    if (updateResponse) {
      return true;
    } else {
      return false;
    }
  }

  async deleteInventaryProduct(productID) {
    const deleteResponse = await this.http.post(this.databaseService.apiURL + 'deleteInventaryProduct', {productID}).toPromise();
    if (deleteResponse) {
      return true;
    } else {
      return false;
    }
  }
}
