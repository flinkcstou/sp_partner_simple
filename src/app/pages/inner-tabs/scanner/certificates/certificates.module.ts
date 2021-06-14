import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CertificatesPageRoutingModule} from './certificates-routing.module';

import {CertificatesPage} from './certificates.page';
import {ActivateCertificateModule} from '../../../../compontents/activate-certificate/activate-certificate.module';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CertificatesPageRoutingModule,
        ActivateCertificateModule,
        HeaderTabModule,
    ],
    declarations: [CertificatesPage],
})
export class CertificatesPageModule {
}
