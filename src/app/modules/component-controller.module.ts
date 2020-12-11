import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {VersionModule} from '../compontents/version/version.module';
import {NetworkStatusModule} from '../compontents/network-status/network-status.module';
import {throwIfAlreadyLoaded} from './module-import-guard';
import { UserIdentifyModule } from 'src/app/compontents/user-identify/user-identify.module';

const MODULES = [
  NetworkStatusModule,
  VersionModule,
  UserIdentifyModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES]
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
