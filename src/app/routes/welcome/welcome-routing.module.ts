import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiComponent } from './hi/hi.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: '', redirectTo: 'hi-table', pathMatch: 'full' },
    { path: 'hi', component: HiComponent },
    { path: 'table', component: TableComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WelcomeRoutingModule { }
