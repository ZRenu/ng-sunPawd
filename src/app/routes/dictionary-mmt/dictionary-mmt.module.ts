import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LivestockCategoryComponent } from './livestock-category/livestock-category.component';
import { DictionaryMmtRoutingModules } from './dictionaryMmt-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DictionaryMmtRoutingModules
  ],
  declarations: [
    LivestockCategoryComponent
  ]
})
export class DictionaryMmtModule { }
