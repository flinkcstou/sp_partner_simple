import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateHistoryPageRoutingModule } from './certificate-history-routing.module';

import { CertificateHistoryPage } from './certificate-history.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CertificateHistoryPageRoutingModule,
        HeaderTabModule,
        NgxMaskModule,
    ],
  declarations: [CertificateHistoryPage]
})
export class CertificateHistoryPageModule {}
