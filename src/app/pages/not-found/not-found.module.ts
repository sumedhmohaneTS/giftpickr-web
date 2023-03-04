// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Internal modules
import { SharedModule } from '../../shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

// Components
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports:
    [
      CommonModule,
      NotFoundRoutingModule,
      SharedModule,
    ],
  declarations:
    [
      NotFoundComponent,
    ],
})
export class NotFoundModule { }
