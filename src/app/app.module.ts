import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";

import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  DelonAuthModule,
  SimpleInterceptor,
  DelonAuthConfig
} from "@delon/auth";
import { CoreModule } from "./core/core.module";
import { BackInterceptor } from "./core/net/back.interceptor";
export function delonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), {
    token_send_key: "Authorization",
    login_url: "/passport/login"
  } as DelonAuthConfig);
}
registerLocaleData(zh);
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    LayoutModule,
    BrowserModule,
    DelonAuthModule,
    AppRoutingModule,
    IconsProviderModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: DelonAuthConfig, useFactory: delonAuthConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BackInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
