import { Routes, RouterModule } from "@angular/router";
import { AuthIndexComponent } from "./auth-index/auth-index.component";
import { AuthUserComponent } from "./auth-user/auth-user.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  {
    path: "index",
    component: AuthIndexComponent,
    data: {
      breadcrumb: "角色列表"
    }
  },
  {
    path: "user",
    component: AuthUserComponent,
    data: {
      breadcrumb: "用户列表"
    }
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
