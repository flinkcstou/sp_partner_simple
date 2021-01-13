import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ModalController} from '@ionic/angular';
import {StorageLocalService} from '../../services/storage-local.service';
import {PromoService} from '../../services/promo.service';
import {ToastService} from '../../services/controllers/toast.service';

@Component({
    selector: 'app-activate-promo',
    templateUrl: './activate-promo.component.html',
    styleUrls: ['./activate-promo.component.scss'],
})
export class ActivatePromoComponent implements OnInit {
    @Input() data: any;
    promoCodes: any;
    noPromo: boolean = false;
    logoPath: string = environment.apiUrl + '/partners/api/file/logo/';
    selectedPromo: any;

    constructor(private modalCtrl: ModalController,
                private storageLocalService: StorageLocalService,
                private promoService: PromoService,
                private toastService: ToastService
    ) {
        this.logoPath += storageLocalService.getBrand().img_url;

    }

    ngOnInit() {
        console.log(this.data);
        this.getUsersPromo();
    }
    getUsersPromo() {
        this.promoService.getUsersPromo(this.data.id).subscribe( response =>  {
            console.log(response);
            if (response.status === 1) {
                this.promoCodes = response.promos;
            } else {
                this.noPromo = true;
                this.toastService.present('У пользователя отсутствуют промокоды', 'warning');
            }
        }, error => {
            console.error(error);
            this.toastService.present(error, 'danger');
        });
    }

    activatePromo() {
        console.log(this.selectedPromo);
        this.promoService.activateUserPromo(this.selectedPromo.code, this.data.id).subscribe( resp => {
            console.log(resp);
            if (resp.status === 1) {
                this.toastService.present(resp.message, 'success');
                this.goBack();
            } else if (resp.status === 0) {
                this.toastService.present(resp.message, 'danger');
            }
        }, error => {
            this.toastService.present(error, 'danger');
            console.log(error);
        });
    }

    goBack() {
        this.modalCtrl
            .dismiss('close');
    }
}
