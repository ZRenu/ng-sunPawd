import { NgModule } from '@angular/core';
import { HiComponent } from './hi/hi.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableComponent } from './table/table.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WelcomeRoutingModule
  ],
  declarations: [
    HiComponent,
    TableComponent]
})
export class WelcomeModule { }
