import {
  Component,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {
  Table,
  TBData,
  TBColumButton,
  TBChange,
  TBColumn
} from "./table.interface";
@Component({
  // tslint:disable-next-line: component-selector
  selector: "tb",
  templateUrl: "./table.component.html"
})
export class TbleComponent {
  @Input() tbData: Table;
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
}
