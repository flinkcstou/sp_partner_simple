import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {ContentFlexCenterComponent} from './content-flex-center.component';


@NgModule({
  declarations: [ContentFlexCenterComponent],
  exports: [ContentFlexCenterComponent],
  entryComponents: [ContentFlexCenterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ContentFlexCenterModule {
}
