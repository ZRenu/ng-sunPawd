import {
  Component,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from "@angular/core";
import { Table, TBChange } from "./table.interface";
@Component({
  // tslint:disable-next-line: component-selector
  selector: "tb",
  templateUrl: "./table.component.html"
})
export class TbleComponent {
  @Input() tbData: Table;
  isAllDisplayDataChecked = false;
  isIndeterminate = false;

  /**
   * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
   */
  // tslint:disable-next-line: no-output-native
  @Output() readonly change = new EventEmitter<any>();
  constructor() {}
  click(e: Event, i: number, data: {}, mark: string) {
    e.preventDefault();
    e.stopPropagation();
    const res: TBChange = {
      i,
      e,
      rowData: data,
      tbBtnMark: mark
    };
    this.change.emit(res);
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.tbData.nzData.every(
      (item: { checked: any }) => item.checked
    );
    this.isIndeterminate =
      this.tbData.nzData.some((item: { checked: any }) => item.checked) &&
      !this.isAllDisplayDataChecked;
    this.changeEmit();
  }

  checkAll(value: boolean): void {
    this.tbData.nzData.forEach(
      (item: { checked: boolean }) => (item.checked = value)
    );
    this.changeEmit();
  }
  changeEmit() {
    const res: TBChange = {
      checkbox: this.tbData.nzData
    };
    this.change.emit(res);
  }
  sort(value: any) {
    const res: TBChange = {
      sort: value
    };
    this.change.emit(res);
  }
}
