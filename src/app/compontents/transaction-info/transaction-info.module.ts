import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionInfoComponent} from './transaction-info.component';
import {IonicModule} from '@ionic/angular';
import {HeaderBackModule} from '../header-back/header-back.module';


@NgModule({
    declarations: [TransactionInfoComponent],
    exports: [TransactionInfoComponent],
    entryComponents: [TransactionInfoComponent],
    imports: [
        CommonModule,
        IonicModule,
        HeaderBackModule,
    ],
})
export class TransactionInfoModule {
}
