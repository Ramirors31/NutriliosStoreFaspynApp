import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioActualPage } from './inventario-actual.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioActualPageRoutingModule {}
