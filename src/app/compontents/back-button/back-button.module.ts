import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {BackButtonComponent} from './back-button.component';
import {DirectiveModule} from '../../modules/directive.module';


@NgModule({
  declarations: [BackButtonComponent],
  exports: [BackButtonComponent],
  entryComponents: [BackButtonComponent],
  imports: [
    IonicModule,
    DirectiveModule,
    CommonModule
  ]
})
export class BackButtonModule {
}
