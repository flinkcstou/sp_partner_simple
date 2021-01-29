import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPageRoutingModule } from './transaction-routing.module';

import { TransactionPage } from './transaction.page';
import {BackButtonModule} from '../../compontents/back-button/back-button.module';
import {QrImageModule} from '../../compontents/qr-image/qr-image.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TransactionPageRoutingModule,
        BackButtonModule,
        QrImageModule,
    ],
  declarations: [TransactionPage]
})
export class TransactionPageModule {}
