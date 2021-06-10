import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonHeaderComponent} from './common-header.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [CommonHeaderComponent],
    exports: [CommonHeaderComponent],
    entryComponents: [CommonHeaderComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class CommonHeaderModule {
}
