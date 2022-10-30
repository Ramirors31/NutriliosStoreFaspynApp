import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidasPageRoutingModule } from './salidas-routing.module';

import { SalidasPage } from './salidas.page';
import { SharedModule } from 'src/app/_shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidasPageRoutingModule,
    SharedModule,
  ],
  declarations: [SalidasPage]
})
export class SalidasPageModule {}
