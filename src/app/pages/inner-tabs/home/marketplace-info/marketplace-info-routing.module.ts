import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketplaceInfoPage } from './marketplace-info.page';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceInfoPageRoutingModule {}
