import {NgModule} from '@angular/core';
import {ThrottleClickDirective} from '../directives/throttle-click.directive';
import {ClickClassDecoratorDirective} from '../directives/click-class-decorator.directive';
import {PhoneMaskDirective} from '../directives/phone-mask.directive';

@NgModule({
    declarations: [
        ThrottleClickDirective,
        ClickClassDecoratorDirective,
    ],
    imports: [],
    exports: [ThrottleClickDirective,
        ClickClassDecoratorDirective],
})
export class DirectiveModule {
}
