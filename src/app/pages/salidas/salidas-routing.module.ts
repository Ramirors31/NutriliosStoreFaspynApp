import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalidasPage } from './salidas.page';

const routes: Routes = [
  {
    path: '',
    component: SalidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalidasPageRoutingModule {}
