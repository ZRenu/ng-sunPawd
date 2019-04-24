import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { ApiService, API_URL } from './core/api/api.service';
import { environment } from 'src/environments/environment';
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
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
    RoutesModule,
    LayoutModule,
    CoreModule,
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot()
  ],
  providers: [
    ApiService,
    { provide: API_URL, useValue: environment.urlPrefix },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
