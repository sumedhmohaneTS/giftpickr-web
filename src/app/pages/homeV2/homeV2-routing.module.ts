// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

// Components
import { HomeV2Component } from './homeV2.component';

const routes: Routes = [
  { path: '', component: HomeV2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV2RoutingModule { }
