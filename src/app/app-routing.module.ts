import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutOneComponent } from "./layout/layout-one/layout-one.component";
import { LayoutTwoComponent } from "./layout/layout-two/layout-two.component";
import { LayoutThreeComponent } from "./layout/layout-three/layout-three.component";
import { PassportComponent } from "./layout/passport/passport.component";
import { JWTGuard } from '@delon/auth';
const defaultLayout = "layout-one";
const canActivate = [JWTGuard];
const children = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./routes/home/home.module#HomeModule" },
  { path: "auth", loadChildren: "./routes/auth/auth.module#AuthModule" }
];
const passportChilden = [
  { path: "", loadChildren: "./routes/passport/passport.module#PassportModule" }
];
const routes: Routes = [
  { path: "", redirectTo: defaultLayout, pathMatch: "full" },
  {
    path: "passport",
    component: PassportComponent,
    children: passportChilden
  },
  {
    path: "layout-one",
    component: LayoutOneComponent,
    children,
    canActivate
  },
  {
    path: "layout-two",
    component: LayoutTwoComponent,
    children,
    canActivate
  },
  {
    path: "layout-three",
    component: LayoutThreeComponent,
    children,
    canActivate
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
