import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

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
                loadChildren: () => import('../tab/chat-tab/chat-tab.module').then(m => m.ChatTabPageModule)
            },
            {
                path: 'profile-tab',
                loadChildren: () => import('../tab/profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
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
export class TabsPageRoutingModule {
}
