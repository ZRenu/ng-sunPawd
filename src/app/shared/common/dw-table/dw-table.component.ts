import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dw-table',
  templateUrl: './dw-table.component.html',
  styleUrls: ['./dw-table.component.less']
})
export class DwTableComponent implements OnInit, OnChanges {

  constructor() { }
  allChecked = false;
  dataChecked = [];
  @Input() tableDatas;
  @Output() checked = new EventEmitter<object>();
  @Output() checkedSingle = new EventEmitter<object>();
  @Output() switch = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  @Output() editData = new EventEmitter<object>();
  @Output() infoData = new EventEmitter<object>();
  @Output() warningData = new EventEmitter<object>();
  @Output() meadowData = new EventEmitter<object>();
  @Output() userData = new EventEmitter<object>();
  @Output() authorityData = new EventEmitter<object>();
  @Output() updateAuthorityData = new EventEmitter<object>();
  @Output() passwordData = new EventEmitter<object>();
  @Output() empowerData = new EventEmitter<object>();
  @Output() page = new EventEmitter<number>();
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.tableDatas.checked || this.tableDatas.checkedSingle) {
      this.dataChecked = [];
      const lth = this.tableDatas.itemLength;
      for (let i = 0; i < lth; i++) {
        this.dataChecked.push({ checked: false, id: i });
      }
    }
  }
  refreshStatus(i): void {
    this.allChecked = this.dataChecked.every(e => e.checked === true);
    this.checkEmit();
  }
  refreSingle(i) {
    this.dataChecked.filter(e => e.id !== i)
      .forEach(_e => _e.checked = false);
    this.checkedSingle.emit(i);
  }
  checkAll(): void {
    this.dataChecked.forEach(e => {
      e.checked = !e.checked;
    });
    this.checkEmit();
  }
  checkEmit() {
    const ids = [];
    if (this.dataChecked.some(e => e.checked) === true) {
      this.dataChecked.filter(e => e.checked === true)
        .forEach(_e => {
          ids.push(_e.id);
        });
    }
    this.checked.emit(ids);
  }
  changeSwitch(e) {
    this.switch.emit(e);
  }
  edit(e) {
    this.editData.emit(e);
  }
  confirm(e) {
    this.delete.emit(e);
  }
  info(e) {
    this.infoData.emit(e);
  }
  warning(e) {
    this.warningData.emit(e);
  }
  meadow(e) {
    this.meadowData.emit(e);
  }
  user(e) {
    this.userData.emit(e);
  }
  authority(e) {
    this.authorityData.emit(e);
  }
  updateAuthority(e) {
    this.updateAuthorityData.emit(e);
  }
  empower(e) {
    this.empowerData.emit(e);
  }
  password(e) {
    this.passwordData.emit(e);
  }
  cancel() {

  }
  refreshData($event) {
    this.page.emit($event);
  }
}
/**
 * itemLength: 当前也数据量
 * title: 表格标题
 * footer：表格底部
 * loading： 加载中
 * bordered：是否展示外边框和列边框
 * checked：多选框
 * checkedSingle：单选框
 * dataTh：表头
 * dataSet：数据
 * tdItem：数据项名
 * switch：状态
 * switchName：状态字段名
 * size：表格大小
 * total：数据总理，用于分页
 * pagination：是否开启分页
 * pageSize：每页数据
 * pageIndex：当前页
 * operate:是否开始操作
 * nzScroll: 容器宽度
 * nzWidth: 操作列宽度
 */
export interface DwTable {
  itemLength?: number;
  title?: string;
  footer?: string;
  loading?: boolean;
  bordered?: boolean;
  checked?: boolean;
  checkedSingle?: boolean;
  dataTh?: any;
  dataSet?: any;
  tdItem?: any;
  switch?: boolean;
  size: string;
  total?: number;
  switchName?: string;
  pagination?: boolean;
  pageSize?: number;
  pageIndex?: number;
  operate?: boolean;
  operateInfo?: boolean;
  operaUser?: boolean;
  operaRole?: boolean;
  meadow?: boolean;
  nzScroll?: any;
  nzWidth?: string;
}