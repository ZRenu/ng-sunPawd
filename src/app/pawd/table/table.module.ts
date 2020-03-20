import { NgModule } from "@angular/core";
import { TbleComponent } from "./table.component";
import { SharedModule } from "src/app/shared/shared.module";
const COMPONENTS = [TbleComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports: [...COMPONENTS]
})
export class TbModule {}
