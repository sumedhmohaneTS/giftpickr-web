// Angular modules
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External modules
import { TransferHttpCacheModule } from '@nguniversal/common';
// Internal modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Services
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

// Components
import { AppComponent } from './app.component';

// Factories

@NgModule({
  imports: [
    // Angular modules
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    // External modules

    // Internal modules
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // Services
    AppService,
    StoreService,

    // Pipes
    DatePipe,

    // Guards

    // Interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
