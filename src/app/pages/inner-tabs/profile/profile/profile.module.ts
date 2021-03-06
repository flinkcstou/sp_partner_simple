import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {ContentFlexCenterModule} from '../../../../compontents/content-flex-center/content-flex-center.module';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        ContentFlexCenterModule,
        HeaderTabModule,
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
