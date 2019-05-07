import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { ActualRoutingModules } from './actual-routing.module';
import { MapComponent } from './index/map/map.component';
import { VideoComponent } from './index/video/video.component';
import { BarComponent } from './index/bar/bar.component';
import { LineComponent } from './index/line/line.component';

@NgModule({
  imports: [
    SharedModule,
    ActualRoutingModules
  ],
  declarations: [IndexComponent, MapComponent, VideoComponent, BarComponent, LineComponent]
})
export class ActualModule { }
