import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerTabPageRoutingModule } from './scanner-tab-routing.module';

import { ScannerTabPage } from './scanner-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerTabPageRoutingModule
  ],
  declarations: [ScannerTabPage]
})
export class ScannerTabPageModule {}
