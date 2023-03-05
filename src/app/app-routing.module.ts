// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// Components
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: 'V2',
    loadChildren: () => import('./pages/homeV2/homeV2.module').then(m => m.HomeV2Module),
  },
  {
    path: 'find-gift',
    loadChildren: () => import('./pages/find-gift/find-gift.module').then(m => m.FindGiftModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
