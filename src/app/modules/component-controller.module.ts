import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {VersionModule} from '../compontents/version/version.module';
import {NetworkStatusModule} from '../compontents/network-status/network-status.module';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {UserIdentifyModule} from 'src/app/compontents/user-identify/user-identify.module';
import {ActivatePromoModule} from '../compontents/activate-promo/activate-promo.module';
import {QrImageModule} from '../compontents/qr-image/qr-image.module';
import {ActivateCertificateModule} from '../compontents/activate-certificate/activate-certificate.module';
import {TransactionInfoModule} from '../compontents/transaction-info/transaction-info.module';
import {CertificateInfoModule} from '../compontents/certificate-info/certificate-info.module';
import {MarketplaceInfoModule} from '../compontents/marketplace-info/marketplace-info.module';

const MODULES = [
    NetworkStatusModule,
    VersionModule,
    UserIdentifyModule,
    TransactionInfoModule,
    MarketplaceInfoModule,
    QrImageModule,
    ActivatePromoModule,
    CertificateInfoModule,
    ActivateCertificateModule,
];

@NgModule({
    declarations: [],
    imports: [...MODULES],
})
export class ComponentControllerModule {
    constructor(@Optional() @SkipSelf() parentModule: ComponentControllerModule) {
        throwIfAlreadyLoaded(parentModule,
            'ComponentModule');
    }

    static forRoot(): ModuleWithProviders<ComponentControllerModule> {
        return {
            ngModule: ComponentControllerModule,
            providers: [],
        } as ModuleWithProviders<ComponentControllerModule>;
    }
}
