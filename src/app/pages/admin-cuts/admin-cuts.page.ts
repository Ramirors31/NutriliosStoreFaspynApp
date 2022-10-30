import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { SalidaDetallesComponent } from 'src/app/components/salida-detalles/salida-detalles.component';
import { AdminCutsService } from 'src/services/admin-cuts.service';
import { AuxFnsService } from 'src/services/aux-fns.service';
import { CalendarService } from 'src/services/calendar.service';

@Component({
  selector: 'app-admin-cuts',
  templateUrl: './admin-cuts.page.html',
  styleUrls: ['./admin-cuts.page.scss'],
})
export class AdminCutsPage implements OnInit {

  showingWeek: any;
  selectedWeek: any;
  liveWeek: any;
  showingMonth: any;
  selectedCalendarMode = 'weeklyView';
  selectedDateSales: any;

  constructor(
    public adminCutsService: AdminCutsService,
    public  auxFns: AuxFnsService,
    public calendarService: CalendarService,
    public modalController: ModalController,
    public loadingController: LoadingController) { }
    tableHeaders: any = ["ID venta", "Fecha", "Vendedor", "Monto", 'Tipo salida', "Detalles"];

  async ngOnInit() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Cargando',
    });
    await loading.present();
    this.liveWeek = this.calendarService.getActualWeekMondayDate();
    this.selectedWeek = this.liveWeek;
    this.selectedDateSales = await this.adminCutsService.getSelectedDateSales(new Date());
    // this.selectedDateSales.forEach((selectedDateSale) => {
    //   JSON.parse(selectedDateSale.salida_productos);
    // });
    console.log(this.selectedDateSales);
    await loading.dismiss();
  }

  getTodaysDate() {
    const todaysDate = new Date();
    return this.auxFns.getFormatDate(todaysDate).formatDate;
  }

  getSaleProducts(products) {
    return JSON.parse(products);
  }
  async generateDailyCut() {
    const realSales = this.selectedDateSales.filter((sale) => sale.salida_tipo === 'Venta');
    this.getDateSales();
    debugger;
  }


  selectedDateRealSales: any;
  selectedDateSoldProducts: any;
  getDateSales() {
    this.selectedDateRealSales = this.selectedDateSales.filter((sale) => sale.salida_tipo === 'Venta');
    this.selectedDateSoldProducts = this.selectedDateRealSales.map((realSale) => JSON.parse(realSale.salida_productos));
    debugger;
  }

  async dateChange(selectedDate) {
    selectedDate = selectedDate.detail.value;
    const loading = await this.loadingController.create({
      message: 'Cargando',
      spinner: 'bubbles',
    });
    await loading.present();
    this.selectedDateSales = await this.adminCutsService.getSelectedDateSales(new Date(selectedDate));
    loading.dismiss();
    console.log(this.selectedDateSales);
  }
  closeSalesDetailsModal() {
    this.salesDetailsModal.dismiss();
  }

  salesDetailsModal: any;
  async openSalesDetails(saleData) {
    saleData.salida_productos = JSON.parse(saleData.salida_productos);
    this.salesDetailsModal = await this.modalController.create({
      component: SalidaDetallesComponent,
      componentProps: {
        closeSalesDetailsModal: this.closeSalesDetailsModal.bind(this),
        saleData,
      }
    });
    return await this.salesDetailsModal.present();
  }

  getActualWeekMonday(): any {
    return this.calendarService.getActualWeekMondayDate();
  }

}
