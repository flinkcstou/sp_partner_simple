import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ErrorInterceptor} from './interceptors/error';
import {TokenInterceptor} from './interceptors/token';
import {ComponentControllerModule} from './modules/component-controller.module';
import {NgxMaskModule} from 'ngx-mask';
import {CallNumber} from '@ionic-native/call-number/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        NgxMaskModule.forRoot(),
        ComponentControllerModule.forRoot(),
        AppRoutingModule],
    providers: [
        StatusBar,
        CallNumber,
        SplashScreen,
        QRScanner,
        BarcodeScanner,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
