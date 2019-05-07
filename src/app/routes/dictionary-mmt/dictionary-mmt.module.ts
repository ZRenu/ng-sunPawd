import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LivestockCategoryComponent } from './livestock-category/livestock-category.component';
import { DictionaryMmtRoutingModules } from './dictionaryMmt-routing.module';
import { LivestockCategoryModelComponent } from './livestock-category/livestock-category-model/livestock-category-model.component';

@NgModule({
  imports: [
    SharedModule,
    DictionaryMmtRoutingModules
  ],
  declarations: [
    LivestockCategoryComponent,
    LivestockCategoryModelComponent
  ]
})
export class DictionaryMmtModule { }
