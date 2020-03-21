import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthRoutes } from "./auth.routing";
import { UserComponent } from './user/user.component';
import { RightComponent } from './right/right.component';
import { PawdModule } from 'src/app/pawd/pawd.module';
import { UserAddComponent } from './user/model/user-add/user-add.component';
import { UserDisComponent } from './user/model/user-dis/user-dis.component';
import { RightRoleComponent } from './right/model/right-role/right-role.component';

@NgModule({
  declarations: [UserComponent, RightComponent, UserAddComponent, UserDisComponent, RightRoleComponent],
  imports: [SharedModule,PawdModule, AuthRoutes]
})
export class AuthModule {}
