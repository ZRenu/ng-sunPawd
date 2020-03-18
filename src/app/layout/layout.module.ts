import { NgModule } from "@angular/core";
import { LayoutOneComponent } from "./layout-one/layout-one.component";
import { SharedModule } from "../shared/shared.module";
import { LayoutTwoComponent } from "./layout-two/layout-two.component";
import { LayoutThreeComponent } from "./layout-three/layout-three.component";
import { PassportComponent } from './passport/passport.component';
import { ExceptionComponent } from './exception/exception.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
const LAYOUTS = [LayoutOneComponent, LayoutTwoComponent, LayoutThreeComponent];
@NgModule({
  declarations: [...LAYOUTS, PassportComponent, ExceptionComponent, LayoutDefaultComponent],
  exports: [...LAYOUTS],
  imports: [SharedModule]
})
export class LayoutModule {}
