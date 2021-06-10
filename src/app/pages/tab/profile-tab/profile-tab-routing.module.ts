import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTabPage } from './profile-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tabs/profile/profile/profile.module').then(m => m.ProfilePageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTabPageRoutingModule {}
