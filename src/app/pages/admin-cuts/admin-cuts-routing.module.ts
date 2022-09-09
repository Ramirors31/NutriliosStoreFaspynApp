import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCutsPage } from './admin-cuts.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCutsPageRoutingModule {}
