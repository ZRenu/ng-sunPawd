import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { EquInfoRoutingModules } from './equInfo-routing.module';

@NgModule({
  imports: [
    SharedModule,
    EquInfoRoutingModules
  ],
  declarations: [IndexComponent]
})
export class EquInfoModule { }
