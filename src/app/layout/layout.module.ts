import { NgModule } from '@angular/core';
import { PassportComponent } from './passport/passport.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './default/header/header.component';
import { SiderComponent } from './default/sider/sider.component';

const COMPONENTS = [
  PassportComponent,
  FullscreenComponent,
  DefaultComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
    SiderComponent
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
