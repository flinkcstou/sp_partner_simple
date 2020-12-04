import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {HeaderBackComponent} from './header-back.component';
import {BackButtonModule} from '../back-button/back-button.module';


@NgModule({
  declarations: [HeaderBackComponent],
  exports: [HeaderBackComponent],
  entryComponents: [HeaderBackComponent],
  imports: [
    CommonModule,
    IonicModule,
    BackButtonModule
  ]
})
export class HeaderBackModule {
}
