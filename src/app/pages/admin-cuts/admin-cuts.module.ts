import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCutsPageRoutingModule } from './admin-cuts-routing.module';

import { AdminCutsPage } from './admin-cuts.page';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCutsPageRoutingModule,
  ],
  declarations: [AdminCutsPage, CalendarComponent]
})
export class AdminCutsPageModule {}
