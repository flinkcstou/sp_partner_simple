import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {

  @Input() route: string = undefined;
  @Input() canGoBack: boolean = false;

  constructor(private navCtrl: NavController) {
  }

  goBack() {
    console.log(this.route);
    if (!!this.route) {
      console.log('ya tut');
      this.navCtrl.navigateBack([this.route]);
      return;
    }
    // if (!!this.modalService.isPresent) {
    //   this.modalService.dismiss();
    //   return;
    // }
    this.navCtrl.back({animated: false});
  }

}
