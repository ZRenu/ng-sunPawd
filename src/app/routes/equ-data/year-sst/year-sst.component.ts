import { Component, OnInit } from '@angular/core';
import { DatePicker } from '../../../shared/common/dw-date-picker/dw-date-picker.component';
import { DwTable } from '../../../shared/common/dw-table/dw-table.component';

@Component({
  selector: 'app-year-sst',
  templateUrl: './year-sst.component.html',
  styleUrls: ['./year-sst.component.less']
})
export class YearSstComponent implements OnInit {

  constructor() { }

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
  field: '';
  fieldList = [
    { label: '选择字段名称', value: '0' },
    { label: '设备编号', value: '1' }
  ];
  fieldValue = { label: '选择字段名称', value: '0' };
  tbData = {
    meadowValue: '',
    fieldValue: '',
    field: '',
    starttime: '',
    endTime: ''
  };

  tableDatas: DwTable = {
    loading: false,
    bordered: false,
    itemLength: 0,
    size: 'default',
    pagination: true,
    total: 0,
    pageSize: 10,
    pageIndex: 1,
    operate: false,
    nzScroll: { x: '1000px' },
    nzWidth: '200px',
    dataTh: [
      {
        title: '统计时间',
      },
      {
        title: '设备编号',
      },
      {
        title: '牧畜',
      },
      {
        title: '步数'
      },
      {
        title: '牧场名称'
      }
    ],
    tdItem: [
      { name: 'time' },
      { name: 'code' },
      { name: 'age' },
      { name: 'address' },
      { name: 'number' }
    ],
    dataSet: []
  }
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;
  ngOnInit() {
    this.tableList();
  }
  tableList() {
    const dataSet = [
      {
        key: '1',
        name: '莫希宇',
        age: 26,
        number: 10,
        isOut: 0,
        address: '上海市浦东新区盛夏路560号',
        code: '87787923424',
        time: '2018-09-14'
      },
      {
        key: '2',
        name: '刘畅',
        age: 25,
        number: 8,
        isOut: 0,
        address: '上海市浦东新区高科中路333号',
        code: '87787923424',
        time: '2018-09-15'
      },
      {
        key: '3',
        name: '左立军',
        age: 28,
        number: 3,
        isOut: 1,
        address: '上海市浦东新区祖冲之路40号',
        code: '87787923424',
        time: '2018-09-16'
      },
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        isOut: 0,
        address: '上海市浦东新区紫薇路18号',
        code: '87787923424',
        time: '2018-09-17'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 2,
        isOut: 1,
        address: '上海市浦东新区张江路88号',
        code: '87787923424',
        time: '2018-09-15'
      },
      {
        key: '3',
        name: '巫景飞',
        age: 32,
        number: 13,
        isOut: 0,
        address: '上海市浦东新区斜土路599号',
        code: '87787923424',
        time: '2018-09-18'
      }
    ];
    this.tableDatas.itemLength = dataSet.length;
    this.tableDatas.dataSet = dataSet;
    this.tableDatas.total = dataSet.length;
  }
  /**分页 */
  pageIndex(e: number) {
    console.log(e);
  }
  /**牧场 */
  meadowChange(value: { label: string, value: string }, ) {
    console.log(value);
    this.tbData.meadowValue = value.value;
  }
  /**字段 */
  fieldChange(value: { label: string, value: string }, ) {
    console.log(value);
    this.tbData.fieldValue = value.value;
  }
  /**开始时间 */
  launchStart($event: any) {
    // this.chartData.starttime = getTime($event);
    // this.chartData.key = Math.random();
    // this.tbData.starttime = getTime($event);
  }
  /**结束时间 */
  launchEnd($event: any) {
    // this.chartData.endTime = getTime($event);
    // this.chartData.key = Math.random();
    // this.tbData.endTime = getTime($event);
  }
  /**查询 */
  search() {
    this.tbData.field = this.field;
    console.log('tbdata', this.tbData);
  }
  /** 重置*/
  clean() {
    this.selectedValue = { label: '选择牧场', value: '0', };
    this.fieldValue = { label: '选择字段名称', value: '0' };
    this.field = '';
    this.tbData = {
      meadowValue: '',
      fieldValue: '',
      field: '',
      starttime: '',
      endTime: ''
    };
  }

}
