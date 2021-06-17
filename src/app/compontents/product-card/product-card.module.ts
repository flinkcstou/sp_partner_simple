import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from './product-card.component';



@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  entryComponents: [ProductCardComponent],
  imports: [
    CommonModule
  ]
})
export class ProductCardModule { }
