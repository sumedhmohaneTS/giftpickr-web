// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Internal modules
import { SharedModule } from '../../shared/shared.module';
import { FindGiftRoutingModule } from './find-gift-routing.module';

// Components
import { FindGiftComponent } from './find-gift.component';

@NgModule({
  imports:
    [
      CommonModule,
      FindGiftRoutingModule,
      SharedModule,
    ],
  declarations:
    [
      FindGiftComponent,
    ],
})
export class FindGiftModule { }
