import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatisticsPageRoutingModule,
        HeaderTabModule
    ],
  declarations: [StatisticsPage]
})
export class StatisticsPageModule {}
