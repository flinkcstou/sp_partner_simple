import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTabPage } from './home-tab.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tabs/home/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'loyalty',
        loadChildren: () => import('../../inner-tabs/home/loyalty/loyalty.module').then(m => m.LoyaltyPageModule),
      },
      {
        path: 'marketplace',
        loadChildren: () => import('../../inner-tabs/home/marketplace/marketplace.module')
            .then(m => m.MarketplacePageModule),
      },
      {
        path: 'marketplace/:id',
        loadChildren: () => import('../../inner-tabs/home/marketplace-info/marketplace-info.module')
            .then(m => m.MarketplaceInfoPageModule),
      },
      {
        path: 'certificate-history',
        loadChildren: () => import('../../inner-tabs/home/certificate-history/certificate-history.module')
            .then(m => m.CertificateHistoryPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabPageRoutingModule {}
