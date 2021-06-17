import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketplaceInfoComponent} from './marketplace-info.component';
import {IonicModule} from '@ionic/angular';
import {ProductCardModule} from '../product-card/product-card.module';



@NgModule({
  declarations: [MarketplaceInfoComponent],
  exports: [MarketplaceInfoComponent],
  entryComponents: [MarketplaceInfoComponent],
    imports: [
        CommonModule,
        IonicModule,
        ProductCardModule
    ]
})
export class MarketplaceInfoModule { }
