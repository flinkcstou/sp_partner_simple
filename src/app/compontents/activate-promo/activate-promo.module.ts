import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatePromoComponent} from './activate-promo.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ActivatePromoComponent],
    exports: [ActivatePromoComponent],
    entryComponents: [ActivatePromoComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
})
export class ActivatePromoModule {
}
