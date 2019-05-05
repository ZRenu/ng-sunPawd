import { NgModule } from '@angular/core';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { DetailSstComponent } from './detail-sst/detail-sst.component';
import { MonthlySstComponent } from './monthly-sst/monthly-sst.component';
import { YearSstComponent } from './year-sst/year-sst.component';
import { EquDataRoutingModules } from './equData-routing.module.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EquDataRoutingModules
  ],
  declarations: [
    DetailDataComponent,
    DetailSstComponent,
    MonthlySstComponent,
    YearSstComponent]
})
export class EquDataModule { }
