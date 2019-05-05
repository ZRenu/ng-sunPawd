import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { EnviromentRoutingModules } from './environment-routing.module';
import { ChartsComponent } from './index/charts/charts.component';
import { TableComponent } from './index/table/table.component';

@NgModule({
  imports: [
    SharedModule,
    EnviromentRoutingModules
  ],
  declarations: [IndexComponent, ChartsComponent, TableComponent]
})
export class EnvironmentModule { }
