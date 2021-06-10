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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabPageRoutingModule {}
