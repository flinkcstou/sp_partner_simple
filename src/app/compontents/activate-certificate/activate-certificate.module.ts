import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatePromoComponent} from '../activate-promo/activate-promo.component';
import {ActivateCertificateComponent} from './activate-certificate.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [ActivateCertificateComponent],
  exports: [ActivateCertificateComponent],
  entryComponents: [ActivateCertificateComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class ActivateCertificateModule { }
