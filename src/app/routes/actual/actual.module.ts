import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { ActualRoutingModules } from './actual-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ActualRoutingModules
  ],
  declarations: [IndexComponent]
})
export class ActualModule { }
