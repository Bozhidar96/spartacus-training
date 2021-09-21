import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRefModule } from '@spartacus/storefront';
import { MyLogoComponent } from './my-logo/my-logo.component';



@NgModule({
  declarations: [
    MyLogoComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [ MyLogoComponent ]
})
export class SapLogoModule { }
