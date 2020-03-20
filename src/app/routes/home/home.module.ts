import { NgModule } from "@angular/core";
import { IndexComponent } from "./index/index.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutes } from "./home.routing";
import { PawdModule } from 'src/app/pawd/pawd.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [SharedModule, HomeRoutes, PawdModule]
})
export class HomeModule {}
