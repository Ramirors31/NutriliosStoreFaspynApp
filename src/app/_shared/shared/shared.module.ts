import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalidaDetallesComponent } from 'src/app/components/salida-detalles/salida-detalles.component';



@NgModule({
  declarations: [SalidaDetallesComponent],
  imports: [
    CommonModule
  ],
  exports: [SalidaDetallesComponent]
})
export class SharedModule { }
