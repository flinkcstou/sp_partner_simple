import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatePromoComponent} from './activate-promo.component';


@NgModule({
    declarations: [ActivatePromoComponent],
    exports: [ActivatePromoComponent],
    entryComponents: [ActivatePromoComponent],
    imports: [
        CommonModule,
    ],
})
export class ActivatePromoModule {
}
