import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dw-btns',
  templateUrl: './dw-btns.component.html',
  styleUrls: ['./dw-btns.component.less']
})
export class DwBtnsComponent implements OnInit {

  constructor() { }
  @Input() btnsData: object;
  @Output() activeData = new EventEmitter<object>();
  ngOnInit() {
  }
  active(i: number, item: object) {
    this.activeData.emit({ i: i, item: item });
  }
}
/**
 * data 注入数据
 * active 选择项
 * size 尺寸
 */
export interface Btns {
  data: any;
  active: number;
  size: string;
}