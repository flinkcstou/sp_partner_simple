import { Component, OnInit } from '@angular/core';
import { QrService } from '../../services/qr.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading.service';

declare var Html5QrcodeScanner;
declare var Html5Qrcode;
declare var Instascan;

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private qrService: QrService,
              private navController: NavController,
              private loadingService: LoadingService) {

  }

  ngOnInit() {

    // const scanner = new Instascan.Scanner({video: document.getElementById('preview')});
    // scanner.addListener('scan', content => {
    //   console.log(content);
    // });
    // Instascan.Camera.getCameras().then(cameras => {
    //   if (cameras.length > 0) {
    //     scanner.start(cameras[0]);
    //   } else {
    //     console.error('No cameras found.');
    //   }
    // }).catch(e => {
    //   console.error(e);
    // });


//     console.error('asdasdas');
//     alert('adasd');
//
//     let cameraId = null;
//
//     /*    function onScanSuccess(qrCodeMessage) {
//           console.error(qrCodeMessage);
//           // handle on success condition with the decoded message
//           html5QrcodeScanner.clear();
//
//           // ^ this will stop the scanner (video feed) and clear the scan area.
//         }
//
//         const html5QrcodeScanner = new Html5QrcodeScanner(
//           'reader', {fps: 10, qrbox: 250});
//         html5QrcodeScanner.render(onScanSuccess);*/
//
//
//     Html5Qrcode.getCameras().then(devices => {
//       console.error('getCameras', devices);
//       /**
//        * devices would be an array of objects of type:
//        * { id: "id", label: "label" }
//        */
//       if (devices && devices.length) {
//         alert('adasd');
//         cameraId = devices[0].id;
//         const html5QrCode = new Html5Qrcode('#reader');
//         const qrCodeSuccessCallback = message => { /* handle success */
//
//           console.error('message', message);
//         };
//         const config = {fps: 10, qrbox: 250};
// // If you want to prefer back camera
//         html5QrCode.start(cameraId, config, qrCodeSuccessCallback);
//       }
//     }).catch(err => {
//       // handle err
//     });


  }

  scanner() {
    // this.loadingService.present();
    this.qrService.scanner();
    // this.loadingService.dismiss();
  }

  back() {
    this.navController.back();
  }
}
