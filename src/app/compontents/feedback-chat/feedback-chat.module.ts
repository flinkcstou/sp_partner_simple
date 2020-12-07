import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackChatComponent} from './feedback-chat.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [FeedbackChatComponent],
    exports: [FeedbackChatComponent],
    entryComponents: [FeedbackChatComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class FeedbackChatModule {
}
