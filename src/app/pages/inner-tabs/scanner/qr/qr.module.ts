import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {QrPageRoutingModule} from './qr-routing.module';

import {QrPage} from './qr.page';
import {NgQrScannerModule} from 'angular2-qrscanner';
import {HeaderBackModule} from '../../../../compontents/header-back/header-back.module';
import {UserIdentifyModule} from '../../../../compontents/user-identify/user-identify.module';
import {ActivatePromoModule} from '../../../../compontents/activate-promo/activate-promo.module';
import {ActivateCertificateModule} from '../../../../compontents/activate-certificate/activate-certificate.module';
import {HeaderTabModule} from "../../../../compontents/header-tab/header-tab.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgQrScannerModule,
        QrPageRoutingModule,
        HeaderBackModule,
        UserIdentifyModule,
        ActivatePromoModule,
        HeaderTabModule,
    ],
    declarations: [QrPage],
})
export class QrPageModule {
}
