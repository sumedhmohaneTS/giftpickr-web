// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { ToastComponent } from './components/blocks/toast/toast.component';
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';

// Forms
import { FormConfirmComponent } from './components/forms/form-confirm/form-confirm.component';

// Modals
import { ModalWrapperComponent } from './components/modals/modal-wrapper/modal-wrapper.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';

// Pipes

// Directives
import { ModalWrapperDirective } from './directives/modal-wrapper.directive';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LayoutFooterComponent } from '@layouts/layout-footer/layout-footer.component';


@NgModule({
  imports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,

      // External modules
      NgbModule,
      AngularSvgIconModule.forRoot()
    ],
  declarations:
    [
      // Components
      ToastComponent,
      ProgressBarComponent,
      ProductCardComponent,

      // Forms
      FormConfirmComponent,

      // Modals
      ModalWrapperComponent,

      // Layouts
      LayoutHeaderComponent,
      LayoutFooterComponent,

      // Pipes

      // Directives
      ModalWrapperDirective
    ],
  exports:
    [
      // Angular modules
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,

      // External modules
      NgbModule,

      // Components
      ToastComponent,
      ProgressBarComponent,
      ProductCardComponent,

      // Forms
      FormConfirmComponent,

      // Modals
      ModalWrapperComponent,

      // Layouts
      LayoutHeaderComponent,
      LayoutFooterComponent,
      // Pipes

      // Directives
      ModalWrapperDirective
    ],
  providers:
    [
    ]
})
export class SharedModule { }
