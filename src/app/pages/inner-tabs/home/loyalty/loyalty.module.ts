import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoyaltyPageRoutingModule } from './loyalty-routing.module';

import { LoyaltyPage } from './loyalty.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoyaltyPageRoutingModule,
        HeaderTabModule,
        NgxMaskModule
    ],
  declarations: [LoyaltyPage]
})
export class LoyaltyPageModule {}
