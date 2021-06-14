import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatViewPageRoutingModule } from './chat-view-routing.module';

import { ChatViewPage } from './chat-view.page';
import {HeaderTabModule} from '../../../../compontents/header-tab/header-tab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatViewPageRoutingModule,
    HeaderTabModule
  ],
  declarations: [ChatViewPage]
})
export class ChatViewPageModule {}
