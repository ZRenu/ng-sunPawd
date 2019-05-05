import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { MonthlySstComponent } from './monthly-sst/monthly-sst.component';
import { DetailSstComponent } from './detail-sst/detail-sst.component';
import { YearSstComponent } from './year-sst/year-sst.component';
const routes: Routes = [
    { path: '', redirectTo: 'detail-data', pathMatch: 'full' },
    { path: 'detail-data', component: DetailDataComponent },
    { path: 'detail-sst', component: DetailSstComponent },
    { path: 'monthly-sst', component: MonthlySstComponent },
    { path: 'year-sst', component: YearSstComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquDataRoutingModules { }
