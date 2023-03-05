// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

// Components
import { FindGiftComponent } from './find-gift.component';

const routes: Routes = [
  { path: '', component: FindGiftComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindGiftRoutingModule { }
