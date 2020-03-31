import { NgModule } from "@angular/core";
import { LayoutOneComponent } from "./layout-one/layout-one.component";
import { SharedModule } from "../shared/shared.module";
import { PassportComponent } from "./passport/passport.component";
import { ExceptionComponent } from "./exception/exception.component";
import { LayoutDefaultComponent } from "./layout-default/layout-default.component";
import { SiderComponent } from "./common/sider/sider.component";
import { TabsetComponent } from "./common/tabset/tabset.component";
import { LogoComponent } from "./common/header/logo/logo.component";
import { LogoutComponent } from "./common/header/logout/logout.component";
import { MessageComponent } from "./common/header/message/message.component";
import { ToolComponent } from "./common/header/tool/tool.component";
const LAYOUTS = [
  LayoutOneComponent,
  PassportComponent,
  ExceptionComponent,
  LayoutDefaultComponent,
  SiderComponent,
  TabsetComponent,
  LogoComponent,
  LogoutComponent,
  MessageComponent,
  ToolComponent
];
@NgModule({
  declarations: [...LAYOUTS],
  exports: [...LAYOUTS],
  imports: [SharedModule]
})
export class LayoutModule {}
