import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DemoPipe } from "./pipe/pipe";

const SHAREDS = [
  CommonModule,
  NgZorroAntdModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
];
const PIPE = [DemoPipe];
@NgModule({
  declarations: [...PIPE],
  imports: [...SHAREDS],
  exports: [...SHAREDS, ...PIPE]
})
export class SharedModule {}
