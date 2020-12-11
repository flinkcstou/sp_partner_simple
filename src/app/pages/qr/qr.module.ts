import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';

import { QrPage } from './qr.page';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { HeaderBackModule } from '../../compontents/header-back/header-back.module';
import { UserIdentifyModule } from 'src/app/compontents/user-identify/user-identify.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgQrScannerModule,
        QrPageRoutingModule,
        HeaderBackModule,
        UserIdentifyModule,
    ],
  declarations: [QrPage]
})
export class QrPageModule {}
