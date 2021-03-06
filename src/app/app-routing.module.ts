import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/idea-list/idea-list.module').then(m => m.IdeaListPageModule) },
  { path: 'idea', loadChildren: () => import('./pages/idea-details/idea-details.module').then(m => m.IdeaDetailsPageModule) },
  { path: 'idea/:id', loadChildren: () => import('./pages/idea-details/idea-details.module').then(m => m.IdeaDetailsPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
