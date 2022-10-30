import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioActualPageRoutingModule } from './inventario-actual-routing.module';

import { InventarioActualPage } from './inventario-actual.page';
import { EditRegisterProductModalComponent } from 'src/app/components/edit-register-product-modal/edit-register-product-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioActualPageRoutingModule
  ],
  declarations: [InventarioActualPage, EditRegisterProductModalComponent]
})
export class InventarioActualPageModule {}
