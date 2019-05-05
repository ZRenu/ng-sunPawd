import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DwTableComponent } from './common/dw-table/dw-table.component';
import { DwSearchComponent } from './common/dw-search/dw-search.component';
import { DwDatePickerComponent } from './common/dw-date-picker/dw-date-picker.component';
import { DwPaginationComponent } from './common/dw-pagination/dw-pagination.component';
import { DwModelComponent } from './common/dw-model/dw-model.component';

const SHAREDS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  NgZorroAntdModule
];
const COMPONENTS = [
  DwTableComponent,
  DwSearchComponent,
  DwDatePickerComponent,
  DwPaginationComponent,
  DwModelComponent
]
@NgModule({
  imports: [
    ...SHAREDS
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
