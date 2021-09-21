import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletComponent } from './my-outlet/my-outlet.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    MyOutletComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [ MyOutletComponent ]
})
export class OutletsModule { }
