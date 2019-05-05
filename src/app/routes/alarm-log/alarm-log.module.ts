import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { AlarmLogRoutingModules } from './alarmLog-routing.module';

@NgModule({
  imports: [
     SharedModule,
     AlarmLogRoutingModules
  ],
  declarations: [IndexComponent]
})
export class AlarmLogModule { }
