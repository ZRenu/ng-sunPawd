import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMmtComponent } from './customer-mmt/customer-mmt.component';
import { MeadowMmtComponent } from './meadow-mmt/meadow-mmt.component';
import { MenuMmtComponent } from './menu-mmt/menu-mmt.component';
import { RoleMmtComponent } from './role-mmt/role-mmt.component';
import { UserMmtComponent } from './user-mmt/user-mmt.component';
import { SystemMeadowUserComponent } from './meadow-mmt/system-meadow-user/system-meadow-user.component';
const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomerMmtComponent },
    { path: 'meadow', component: MeadowMmtComponent },
    { path: 'menu', component: MenuMmtComponent },
    { path: 'role', component: RoleMmtComponent },
    { path: 'user', component: UserMmtComponent },
    { path: 'meadow-user/:id', component: SystemMeadowUserComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemMmtRoutingModules { }
