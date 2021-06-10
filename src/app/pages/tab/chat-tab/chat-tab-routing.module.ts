import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatTabPage } from './chat-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ChatTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tabs/chat/chat/chat.module').then(m => m.ChatPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatTabPageRoutingModule {}
