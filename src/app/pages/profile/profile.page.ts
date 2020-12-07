import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, NavController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../environments/environment';
import {StorageLocalService} from '../../services/storage-local.service';
import {ModalService} from '../../services/controllers/modal.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    logoPath: string = environment.apiUrl + '/partners/api/file/logo/';

    constructor(
        private authService: AuthService,
        private storageLocalService: StorageLocalService,
        private modalService: ModalService) {
        this.logoPath += storageLocalService.getBrand().img_url;
    }

    ngOnInit() {
    }


    logout() {
        this.authService.logout();
    }
    goToFeedback() {
        if (this.modalService.isPresent) {
            this.modalService.dismiss();
        } else {
            this.modalService.setFeedbackMessageOption();
            this.modalService.present();
        }
    }
}
