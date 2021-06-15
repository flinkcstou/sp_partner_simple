import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateHistoryPage } from './certificate-history.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateHistoryPageRoutingModule {}
