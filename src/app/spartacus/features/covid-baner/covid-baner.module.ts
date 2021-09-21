import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRefModule } from '@spartacus/storefront';
import { CovidInfoComponent } from './covid-info/covid-info.component';



@NgModule({
  declarations: [
    CovidInfoComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [
    CovidInfoComponent
  ]
})
export class CovidBanerModule { }
