import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntoDeVentaPageRoutingModule } from './punto-de-venta-routing.module';

import { PuntoDeVentaPage } from './punto-de-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntoDeVentaPageRoutingModule
  ],
  declarations: [PuntoDeVentaPage]
})
export class PuntoDeVentaPageModule {}
