import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeVentaPage } from './punto-de-venta.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDeVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntoDeVentaPageRoutingModule {}
