import { NgModule } from "@angular/core";
import { TbModule } from "./table/table.module";
import { PickerModule } from './picker/picker.module';
const MODULES = [TbModule, PickerModule];
@NgModule({ exports: MODULES })
export class PawdModule {}
