// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Internal modules
import { SharedModule } from '../../shared/shared.module';
import { FeaturedComponent } from './featured/featured.component';
import { HomeV2RoutingModule } from './homeV2-routing.module';

// Components
import { HomeV2Component } from './homeV2.component';

@NgModule({
  imports:
    [
      CommonModule,
      HomeV2RoutingModule,
      SharedModule,
    ],
  declarations:
    [
      HomeV2Component,
      FeaturedComponent,
    ],
})
export class HomeV2Module { }
