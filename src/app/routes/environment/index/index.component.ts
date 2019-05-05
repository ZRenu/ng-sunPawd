import { Component, OnInit } from '@angular/core';
import { Btns } from 'src/app/shared/common/dw-btns/dw-btns.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor() { }
  btnsData: Btns = {
    data: [
      { 'title': '图表' },
      { 'title': '数据' }
    ],
    active: 0,
    size: 'default'
  };
  btnsDataCharts: Btns = {
    data: [
      { 'title': '温度' },
      { 'title': '湿度' },
      { 'title': '关照亮度' },
      { 'title': '二氧化碳' }
    ],
    active: 0,
    size: 'small'
  };
  optionList = [
    { label: '选择牧场', value: '选择牧场' },
    { label: '牧场1', value: '牧场1' }
  ];
  selectedValue = { label: '选择牧场', value: '选择牧场', };
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

  ngOnInit() {
  }
  active(e: number, type: string) {
    if (type === 'btn') {
      this.btnsData.active = e;
    }
    if (type === 'chat') {
      this.btnsDataCharts.active = e;
    }

  }
  log(value: { label: string, value: string, age: number }): void {
    console.log(value);
  }
}
