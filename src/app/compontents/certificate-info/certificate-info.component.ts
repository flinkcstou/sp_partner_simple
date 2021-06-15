import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ModalController} from '@ionic/angular';
import {QrService} from '../../services/qr.service';
import {ToastService} from '../../services/controllers/toast.service';

@Component({
    selector: 'app-certificate-info',
    templateUrl: './certificate-info.component.html',
    styleUrls: ['./certificate-info.component.scss'],
})
export class CertificateInfoComponent implements OnInit {

    @Input() data: any;
    userPhotoUrl: string = environment.apiUrl + '/users/api/v1/file/avatar/';

    constructor(private modalCtrl: ModalController,
                private qrService: QrService,
                private toastService: ToastService) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    goBack() {
        this.modalCtrl
            .dismiss();
    }

    activateCertificate() {
        this.qrService.activateCertificateByQr(this.data.qrString).toPromise().then(async resp => {
            console.log(resp);
            await this.modalCtrl.dismiss();
            await this.qrService.openCertificateActivateModal(resp);
        }).catch(err => {
            console.error(err);
            this.toastService.present(err, 'danger');
        });
        console.log(this.data);
    }

}
