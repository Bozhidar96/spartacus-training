import { Component, OnInit } from '@angular/core';
import {CurrentProductService, OutletPosition, ProductDetailOutlets} from '@spartacus/storefront';

@Component({
  selector: 'app-my-outlet',
  templateUrl: './my-outlet.component.html',
  styleUrls: ['./my-outlet.component.scss']
})
export class MyOutletComponent implements OnInit {

  position = OutletPosition;
  productDetailOutlets = ProductDetailOutlets;
  currentProduct = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
