import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketplacePageRoutingModule } from './marketplace-routing.module';

import { MarketplacePage } from './marketplace.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarketplacePageRoutingModule,
        HeaderTabModule,
        NgxMaskModule
    ],
  declarations: [MarketplacePage]
})
export class MarketplacePageModule {}
