import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Btns } from '../../../shared/common/dw-btns/dw-btns.component';
import { DatePicker } from '../../../shared/common/dw-date-picker/dw-date-picker.component';
import { getTime } from '../../../utils/getTime';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit {

  constructor() { }
  btnsData: Btns = {
    data: [
      { 'title': '图表', value: 1 },
      { 'title': '数据', value: 2 }
    ],
    active: 0,
    size: 'default'
  };
  btnsDataCharts: Btns = {
    data: [
      { 'title': '温度', value: 1 },
      { 'title': '湿度', value: 2 },
      { 'title': '关照亮度', value: 3 },
      { 'title': '二氧化碳', value: 4 }
    ],
    active: 0,
    size: 'small'
  };
  datePicker: DatePicker = {
    nzSize: 'default',
    startPlaceHolder: '开始时间',
    endtPlaceHolder: '结束时间',
    ShowToday: false,
    Format: 'yyyy-MM-dd',
    nzAllowClear: false

  };
  optionList = [
    { label: '选择牧场', value: '0' },
    { label: '牧场1', value: '1' }
  ];
  selectedValue = { label: '选择牧场', value: '0', };
  monitorList = [
    { label: '选择监测项', value: '0' },
    { label: '空气湿度', value: '1' },
    { label: '土壤温度', value: '2' },
    { label: '空气温度', value: '3' },
  ];
  monitorValue = { label: '选择监测项', value: '0' };
  /**图表筛选 */
  chartData = {
    key: 0,
    type: 1,
    starttime: '',
    endTime: '',
    meadow: '',
  };
  /**表格筛选 */
  tbData = {
    monitor: '',
    meadow: '',
  }
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

  ngOnInit() {
  }
  /**按钮切换 */
  active(e: object, type: string) {
    if (type === 'btn') {
      this.btnsData.active = e['i'];
    }
    if (type === 'chat') {
      this.btnsDataCharts.active = e['i'];
      this.chartData.type = e['item']['value'];
      this.chartData.key = Math.random();
    }

  }
  /**牧场 */
  meadowChange(value: { label: string, value: string }, type: string): void {
    if (type === 'chat') {
      this.chartData.key = Math.random();
    }
    this.chartData.meadow = value.value;
    this.tbData.meadow = value.value;
  }
  /**监测项 */
  monitorChange(value: { label: string, value: string }) {
    this.tbData.monitor = value.value;
  }
  /**开始时间 */
  launchStart($event: any) {
    this.chartData.starttime = getTime($event);
    this.chartData.key = Math.random();
  }
  /**结束时间 */
  launchEnd($event: any) {
    this.chartData.endTime = getTime($event);
    this.chartData.key = Math.random();
  }
  /**查询 */
  search() {
    console.log('data', this.tbData);
  }
  /**重置 */
  clean() {
    this.selectedValue = { label: '选择牧场', value: '0', };
    this.monitorValue = { label: '选择监测项', value: '0' };
    this.tbData = {
      monitor: '',
      meadow: '',
    }

  }
  ngAfterViewInit(): void {
    // console.log('----------');
    // this.chartWidth();
  }
}
