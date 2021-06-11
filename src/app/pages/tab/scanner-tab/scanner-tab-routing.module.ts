import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerTabPage } from './scanner-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ScannerTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tabs/scanner/scanner/scanner.module').then(m => m.ScannerPageModule),
      },
      {
        path: 'qr',
        loadChildren: () => import('../../inner-tabs/scanner/qr/qr.module').then(m => m.QrPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerTabPageRoutingModule {}
