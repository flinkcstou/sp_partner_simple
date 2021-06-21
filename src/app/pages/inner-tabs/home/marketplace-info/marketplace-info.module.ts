import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketplaceInfoPageRoutingModule } from './marketplace-info-routing.module';

import { MarketplaceInfoPage } from './marketplace-info.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';
import {ProductCardModule} from '../../../../compontents/product-card/product-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarketplaceInfoPageRoutingModule,
        HeaderTabModule,
        ProductCardModule,
    ],
  declarations: [MarketplaceInfoPage]
})
export class MarketplaceInfoPageModule {}
