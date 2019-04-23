import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared/shared.module';
import { RourtesModule } from './rourtes/rourtes.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { ApiService, API_URL } from './core/api/api.service';
import { environment } from 'src/environments/environment';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RourtesModule,
    LayoutModule,
    CoreModule
  ],
  providers: [
    ApiService,
    {
      provide: API_URL,
      useValue: environment.urlPrefix
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
