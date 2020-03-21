import { NgModule } from "@angular/core";
import zh from "@angular/common/locales/zh";
import { DelonMockModule } from "@delon/mock";
import { AppComponent } from "./app.component";
import { registerLocaleData } from "@angular/common";
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BackInterceptor } from "./shared/net/back.interceptor";
import { IconsProviderModule } from "./icons-provider.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_NOTIFICATION_CONFIG } from "ng-zorro-antd";
import * as MOCKDATA from "./mock";
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
    SharedModule,
    LayoutModule,
    BrowserModule,
    DelonAuthModule,
    AppRoutingModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    // DelonMockModule.forRoot({ data: MOCKDATA })
  ],
  providers: [
    { provide: DelonAuthConfig, useFactory: delonAuthConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 1 } },
    { provide: HTTP_INTERCEPTORS, useClass: BackInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
