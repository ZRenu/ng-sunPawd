import { NgModule } from "@angular/core";
import { LayoutOneComponent } from "./layout-one/layout-one.component";
import { SharedModule } from "../shared/shared.module";
import { LayoutTwoComponent } from "./layout-two/layout-two.component";
import { LayoutThreeComponent } from "./layout-three/layout-three.component";
import { PassportComponent } from "./passport/passport.component";
import { ExceptionComponent } from "./exception/exception.component";
import { LayoutDefaultComponent } from "./layout-default/layout-default.component";
import { SiderComponent } from "./common/sider/sider.component";
import { HeaderOperateComponent } from "./common/header-operate/header-operate.component";
const LAYOUTS = [
  LayoutOneComponent,
  LayoutTwoComponent,
  LayoutThreeComponent,
  PassportComponent,
  ExceptionComponent,
  LayoutDefaultComponent,
  SiderComponent,
  HeaderOperateComponent
];
@NgModule({
  declarations: [...LAYOUTS],
  exports: [...LAYOUTS],
  imports: [SharedModule]
})
export class LayoutModule {}
