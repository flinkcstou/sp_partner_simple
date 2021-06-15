import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CertificateInfoComponent} from './certificate-info.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [CertificateInfoComponent],
  exports: [CertificateInfoComponent],
  entryComponents: [CertificateInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CertificateInfoModule { }
