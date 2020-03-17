import { Routes, RouterModule } from "@angular/router";
import { AuthIndexComponent } from "./auth-index/auth-index.component";
import { AuthUserComponent } from "./auth-user/auth-user.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: AuthIndexComponent },
  { path: "user", component: AuthUserComponent }
];

export const AuthRoutes = RouterModule.forChild(routes);
