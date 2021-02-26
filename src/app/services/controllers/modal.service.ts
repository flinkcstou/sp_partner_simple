import { Injectable } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {IonicControllerAbstract} from '../../models/abstracts/IonicControllerAbstract';
import {VersionComponent} from '../../compontents/version/version.component';
import {TransactionInfoComponent} from '../../compontents/transaction-info/transaction-info.component';
import {FeedbackChatComponent} from '../../compontents/feedback-chat/feedback-chat.component';
import {UserIdentifyComponent} from '../../compontents/user-identify/user-identify.component';
import {ActivatePromoComponent} from '../../compontents/activate-promo/activate-promo.component';
import {QrImageComponent} from '../../compontents/qr-image/qr-image.component';
import {ActivateCertificateComponent} from '../../compontents/activate-certificate/activate-certificate.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends IonicControllerAbstract {

  constructor(private modalController: ModalController) {
    super(modalController);
  }

  setDefaultOption() {
    this.extraOption = {
      component: VersionComponent,
      cssClass: 'tabs-modal-component',
      swipeToClose: true,
    };
    this.setOption(this.extraOption);
  }

  setTransactionInfoOption(data: any) {
    this.extraOption = {
      component: TransactionInfoComponent,
      // cssClass: 'tabs-modal-component',
      swipeToClose: true,
      componentProps: {
        data
      }
    }
    this.setOption(this.extraOption);
  }

  setUserIdentifyOption(data: any) {
    this.extraOption = {
      component: UserIdentifyComponent,
      swipeToClose: false,
      componentProps: {
        data
      }
    }
    this.setOption(this.extraOption);
  }

  setQrPhotoOption(data: any) {
    this.extraOption = {
      component: QrImageComponent,
      swipeToClose: true,
      componentProps: {
        data
      }
    }
    this.setOption(this.extraOption);
  }

  setUserPromoOption(data: any) {
    this.extraOption = {
      component: ActivatePromoComponent,
      swipeToClose: true,
      componentProps: {
        data
      }
    }
    this.setOption(this.extraOption);
  }
  setUserCertificateOption(data: any) {
    this.extraOption = {
      component: ActivateCertificateComponent,
      swipeToClose: true,
      componentProps: {
        data
      }
    }
    this.setOption(this.extraOption);
  }

  setFeedbackMessageOption() {
    this.extraOption = {
      component: FeedbackChatComponent,
      cssClass: 'small-modal-component',
      swipeToClose: true,
    }
    this.setOption(this.extraOption);
  }
  // setQrCodeGenerateOption() {
  //   this.extraOption = {
  //     component: QrCodeGenerateComponent,
  //     cssClass: 'tabs-modal-component',
  //     swipeToClose: true,
  //   };
  //   this.setOption(this.extraOption);
  // }

  protected async onDismiss(loading): Promise<any> {
    return loading.onDidDismiss();
  }


}
