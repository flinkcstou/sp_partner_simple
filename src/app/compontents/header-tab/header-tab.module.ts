import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {HeaderTabComponent} from './header-tab.component';
import {DirectiveModule} from '../../modules/directive.module';
import { BackButtonModule } from '../back-button/back-button.module';


@NgModule({
    declarations: [HeaderTabComponent],
    exports: [HeaderTabComponent],
    entryComponents: [HeaderTabComponent],
    imports: [
        CommonModule,
        IonicModule,
        DirectiveModule,
        BackButtonModule,
    ],
})
export class HeaderTabModule {
}
