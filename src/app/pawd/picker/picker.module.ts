import { NgModule } from "@angular/core";
import { PickerComponent } from "./picker.component";
import { SharedModule } from "src/app/shared/shared.module";
const COMPONENTS = [PickerComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports: [...COMPONENTS]
})
export class PickerModule {}
