import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { RightComponent } from './right/right.component';

const routes: Routes = [
  { path: "", redirectTo: "user", pathMatch: "full" },
  {
    path: "user",
    component: UserComponent,
    data: {
      breadcrumb: "成员管理"
    }
  },
  {
    path: "right",
    component: RightComponent,
    data: {
      breadcrumb: "权限管理"
    }
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
