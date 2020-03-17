import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ForgetComponent } from "./forget/forget.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "forget", component: ForgetComponent }
];

export const PassportRoutes = RouterModule.forChild(routes);
