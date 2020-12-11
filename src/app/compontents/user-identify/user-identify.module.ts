import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserIdentifyComponent } from './user-identify.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [UserIdentifyComponent],
  exports: [UserIdentifyComponent],
  entryComponents: [UserIdentifyComponent],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class UserIdentifyModule {
}
