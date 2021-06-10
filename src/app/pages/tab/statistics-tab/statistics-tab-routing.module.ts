import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsTabPage } from './statistics-tab.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticsTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tabs/statistics/statistics/statistics.module').then(m => m.StatisticsPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsTabPageRoutingModule {}
