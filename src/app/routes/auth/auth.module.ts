import { NgModule } from "@angular/core";
import { AuthIndexComponent } from "./auth-index/auth-index.component";
import { AuthUserComponent } from "./auth-user/auth-user.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthRoutes } from "./auth.routing";

@NgModule({
  declarations: [AuthIndexComponent, AuthUserComponent],
  imports: [SharedModule, AuthRoutes]
})
export class AuthModule {}
