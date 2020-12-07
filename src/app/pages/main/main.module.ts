import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MainPageRoutingModule} from './main-routing.module';

import {MainPage} from './main.page';
import {HeaderBackModule} from '../../compontents/header-back/header-back.module';
import {DirectiveModule} from '../../modules/directive.module';
import {HeaderTabModule} from '../../compontents/header-tab/header-tab.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainPageRoutingModule,
        HeaderBackModule,
        DirectiveModule,
        HeaderTabModule,
    ],
    declarations: [MainPage]
})
export class MainPageModule {
}
