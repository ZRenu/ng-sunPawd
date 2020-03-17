import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: IndexComponent }
];

export const HomeRoutes = RouterModule.forChild(routes);
