import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    isPresented = false;

    constructor(private loadingController: LoadingController) {
    }

    async present() {
        if (this.isPresented) {
            return;
        }
        const loading = await this.loadingController.create({
            message: 'Please wait...',
        });
        loading.present();
    }

    async dismiss() {
        try {
            await this.loadingController.dismiss();
            this.isPresented = false;
        } catch (e) {
            console.error('catch error:', e);
        }
    }

}
