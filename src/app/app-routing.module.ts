import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then(m => m.QrPageModule)
  },
  {
    path: 'certificates',
    loadChildren: () => import('./pages/certificates/certificates.module').then(m => m.CertificatesPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  // },
  // {
  //   path: 'qr',
  //   loadChildren: () => import('./pages/qr/qr.module').then(m => m.QrPageModule)
  // },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  },
  {
    path: 'transaction',
    loadChildren: () => import('./pages/transaction/transaction.module').then( m => m.TransactionPageModule)
  },


  // {
  //   path: 'main',
  //   loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
