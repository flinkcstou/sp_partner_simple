import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {PlatformService} from './roots/platform.service';
import {environment} from '../../environments/environment';
import {StorageLocalService} from './storage-local.service';

@Injectable({
 providedIn: 'root',
})
export class FirebaseService implements OnDestroy {

 // https://ionicframework.com/docs/native/firebase-x

 constructor(private firebaseX: FirebaseX,
             private platformService: PlatformService,
             private storageLocalService: StorageLocalService) {
 }

 firebaseSubscription: Subscription;


 async start() {
  if (environment.desktop) {
   this.storageLocalService.setPushToken('test-test-tst');
   return;
  }
  await this.setPermissionIos();
  await this.getToken();
 }


 async getToken() {
  this.firebaseX.getToken().then(token => {
   console.error('firebase pushtoken: ', token);
   this.storageLocalService.setPushToken(token);
   // localStorage.setItem('push_token', token);
  });
 }


 async setPermissionIos() {
  if (this.platformService.isIos()) {
   const hasPermission = await this.firebaseX.hasPermission();
   if (!hasPermission) {
    this.firebaseX.grantPermission().then();
   }
  }
 }

 ngOnDestroy() {
 }
}
