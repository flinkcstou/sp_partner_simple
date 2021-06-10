import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../tab/home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'statistics-tab',
        loadChildren: () => import('../tab/statistics-tab/statistics-tab.module').then(m => m.StatisticsTabPageModule)
      },
      {
        path: 'scanner-tab',
        loadChildren: () => import('../tab/scanner-tab/scanner-tab.module').then(m => m.ScannerTabPageModule)
      },
      {
        path: 'chat-tab',
        loadChildren: () => import('../inner-tabs/chat/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('../inner-tabs/profile/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
