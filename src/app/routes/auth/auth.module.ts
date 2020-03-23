import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthRoutes } from "./auth.routing";
import { UserComponent } from "./user/user.component";
import { RightComponent } from "./right/right.component";
import { PawdModule } from "src/app/pawd/pawd.module";

@NgModule({
  declarations: [UserComponent, RightComponent],
  imports: [SharedModule, PawdModule, AuthRoutes]
})
export class AuthModule {}
