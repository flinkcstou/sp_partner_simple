import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {IonicControllerAbstract} from '../../models/abstracts/IonicControllerAbstract';
import {PositionToast} from '../../models/commons/PositionToastType';


@Injectable({
  providedIn: 'root'
})
export class ToastService extends IonicControllerAbstract {

  constructor(toastController: ToastController) {
    super(toastController);
  }

  protected async onDismiss(loading): Promise<any> {
    return null;
  }

  protected setDefaultOption(): void {
    return null;
  }

  async present(title: string = '',color: string = 'success', position: PositionToast = 'top', duration: number = 3000) {
    if (!!title) {
      title = title.replace(/\s+/g,
        ' ')
        .trim();
    }
    this.setOption({
      message: title,
      duration,
      position,
      color,
    });
    return await super.present();
  }
}
