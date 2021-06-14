import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionInfoComponent} from './transaction-info.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [TransactionInfoComponent],
    exports: [TransactionInfoComponent],
    entryComponents: [TransactionInfoComponent],
    imports: [
        CommonModule,
        IonicModule,

    ],
})
export class TransactionInfoModule {
}
