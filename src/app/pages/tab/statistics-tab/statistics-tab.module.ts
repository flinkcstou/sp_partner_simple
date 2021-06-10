import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsTabPageRoutingModule } from './statistics-tab-routing.module';

import { StatisticsTabPage } from './statistics-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsTabPageRoutingModule
  ],
  declarations: [StatisticsTabPage]
})
export class StatisticsTabPageModule {}
