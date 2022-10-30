/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuxFnsService } from './aux-fns.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AdminCutsService {

  constructor(public dbService: DatabaseService, public auxFns: AuxFnsService, public http: HttpClient) { }

  async getSelectedDateSales(selectedDate) {
    const formatSelectedDate = this.auxFns.getFormatDate(selectedDate).dbFormatData;
    const conditionObj = {
      // eslint-disable-next-line quote-props
      'salida_fecha': formatSelectedDate,
    };
    const payload = {
      action: 'getDateSales',
      params: {
        tableName: 'salidas',
        conditionObj,
      }
    };
    const updateResponse = await this.http.post(this.dbService.apiURL + 'adminCuts', payload, {}).toPromise();
    if (updateResponse) {
      console.log(updateResponse);
      return updateResponse;
    } else {
      return false;
    }
  }

  generateDailyCut(dateSales) {
    
  }
}
