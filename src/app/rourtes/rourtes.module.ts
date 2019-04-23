import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './rourtes-routing.module';
import { LoginComponent } from './passport/login/login.component';


@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule
  ],
  declarations: [LoginComponent]
})
export class RourtesModule { }
