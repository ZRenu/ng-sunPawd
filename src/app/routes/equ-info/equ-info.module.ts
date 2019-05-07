import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { EquInfoRoutingModules } from './equInfo-routing.module';
import { ModelComponent } from './index/model/model.component';

@NgModule({
  imports: [
    SharedModule,
    EquInfoRoutingModules
  ],
  declarations: [IndexComponent, ModelComponent]
})
export class EquInfoModule { }
