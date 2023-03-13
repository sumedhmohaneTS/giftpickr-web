// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External modules

// Components 
// Forms 
// Modals

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';

// Pipes

// Directives 
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LayoutFooterComponent } from '@layouts/layout-footer/layout-footer.component';
import { SeoModule } from './seo/seo.module';
import { GiftFormComponent } from './components/gift-form/gift-form.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { GiftFormService } from './components/gift-form/gift-form.service';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      SeoModule,
      // External modules 

      AngularSvgIconModule.forRoot(),
      MatSliderModule,
      MatChipsModule,
      MatRippleModule,
      MatTooltipModule,
      MatInputModule,
    ],
  declarations:
    [
      // Components 
      ProductCardComponent,
      GiftFormComponent,
      // Forms 

      // Modals

      // Layouts
      LayoutHeaderComponent,
      LayoutFooterComponent,

      // Pipes

      // Directives 
    ],
  exports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      SeoModule,
      // External modules


      // Components

      ProductCardComponent,
      GiftFormComponent,
      // Forms


      // Modals

      // Layouts
      LayoutHeaderComponent,
      LayoutFooterComponent,
      // Pipes

      // Directives

    ],
  providers:
    [
      GiftFormService,
    ]
})
export class SharedModule { }
