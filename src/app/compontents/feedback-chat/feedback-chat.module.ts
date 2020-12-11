import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackChatComponent} from './feedback-chat.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [FeedbackChatComponent],
    exports: [FeedbackChatComponent],
    entryComponents: [FeedbackChatComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
})
export class FeedbackChatModule {
}
