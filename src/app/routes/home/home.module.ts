import { NgModule } from "@angular/core";
import { IndexComponent } from "./index/index.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutes } from "./home.routing";

@NgModule({
  declarations: [IndexComponent],
  imports: [SharedModule, HomeRoutes]
})
export class HomeModule {}
