import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { PassportRoutes } from "./passport.routing";
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [LoginComponent, ForgetComponent],
  imports: [SharedModule, PassportRoutes]
})
export class PassportModule {}
