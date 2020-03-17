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
    DelonAuthModule,
    SharedModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: DelonAuthConfig, useFactory: delonAuthConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
