import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomerMmtComponent } from './customer-mmt/customer-mmt.component';
import { MeadowMmtComponent } from './meadow-mmt/meadow-mmt.component';
import { UserMmtComponent } from './user-mmt/user-mmt.component';
import { RoleMmtComponent } from './role-mmt/role-mmt.component';
import { MenuMmtComponent } from './menu-mmt/menu-mmt.component';
import { SystemMmtRoutingModules } from './systemMmt-routing.module';

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
    MenuMmtComponent]
})
export class SystemMmtModule { }
