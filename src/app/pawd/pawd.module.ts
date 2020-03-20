import { NgModule } from "@angular/core";
import { TbModule } from "./table/table.module";
const MODULES = [TbModule];
@NgModule({ exports: MODULES })
export class PawdModule {}
