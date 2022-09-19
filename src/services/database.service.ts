import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  apiURL = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  async getInventaryData() {
    const inventaryData = await this.http.get(this.apiURL + 'inventaryData').toPromise();
    console.log(inventaryData);
    return inventaryData;
  }
}
