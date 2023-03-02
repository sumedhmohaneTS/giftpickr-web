// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// Components
const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
