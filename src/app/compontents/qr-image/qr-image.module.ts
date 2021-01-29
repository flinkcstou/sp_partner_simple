import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QrImageComponent} from './qr-image.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [QrImageComponent],
  exports: [QrImageComponent],
  entryComponents: [QrImageComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class QrImageModule { }
