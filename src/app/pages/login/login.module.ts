import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {ContentFlexCenterModule} from '../../compontents/content-flex-center/content-flex-center.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ContentFlexCenterModule,
    ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
