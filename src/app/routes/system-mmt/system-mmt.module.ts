import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomerMmtComponent } from './customer-mmt/customer-mmt.component';
import { MeadowMmtComponent } from './meadow-mmt/meadow-mmt.component';
import { UserMmtComponent } from './user-mmt/user-mmt.component';
import { RoleMmtComponent } from './role-mmt/role-mmt.component';
import { MenuMmtComponent } from './menu-mmt/menu-mmt.component';
import { SystemMmtRoutingModules } from './systemMmt-routing.module';
import { SystemCustomerModelComponent } from './customer-mmt/system-customer-model/system-customer-model.component';
import { SystemMeadowModelComponent } from './meadow-mmt/system-meadow-model/system-meadow-model.component';
import { SystemMeadowUserComponent } from './meadow-mmt/system-meadow-user/system-meadow-user.component';
import { SystemMeadowUserModelComponent } from './meadow-mmt/system-meadow-user-model/system-meadow-user-model.component';
import { SystemMeadowWaringModelComponent } from './meadow-mmt/system-meadow-waring-model/system-meadow-waring-model.component';
import { SystemMeadowScopeModelComponent } from './meadow-mmt/system-meadow-scope-model/system-meadow-scope-model.component';
import { UserMmtModelComponent } from './user-mmt/user-mmt-model/user-mmt-model.component';
import { UserMmtAuthorComponent } from './user-mmt/user-mmt-author/user-mmt-author.component';
import { UserMmtPasswordComponent } from './user-mmt/user-mmt-password/user-mmt-password.component';
import { RoleMmtModelComponent } from './role-mmt/role-mmt-model/role-mmt-model.component';

@NgModule({
  imports: [
    SharedModule,
    SystemMmtRoutingModules
  ],
  declarations: [
    CustomerMmtComponent,
    MeadowMmtComponent,
    UserMmtComponent,
    RoleMmtComponent,
    MenuMmtComponent,
    SystemCustomerModelComponent,
    SystemMeadowModelComponent,
    SystemMeadowUserComponent,
    SystemMeadowUserModelComponent,
    SystemMeadowWaringModelComponent,
    SystemMeadowScopeModelComponent,
    UserMmtModelComponent,
    UserMmtAuthorComponent,
    UserMmtPasswordComponent,
    RoleMmtModelComponent,
  ]
})
export class SystemMmtModule { }
