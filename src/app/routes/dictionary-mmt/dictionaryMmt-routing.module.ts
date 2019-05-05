import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestockCategoryComponent } from './livestock-category/livestock-category.component';

const routes: Routes = [
    { path: '', redirectTo: 'Livestock', pathMatch: 'full' },
    { path: 'Livestock', component: LivestockCategoryComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DictionaryMmtRoutingModules { }
