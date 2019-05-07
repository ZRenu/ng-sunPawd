import { Component, OnInit } from '@angular/core';
import { DwTable } from '../../../shared/common/dw-table/dw-table.component';

@Component({
  selector: 'app-user-mmt',
  templateUrl: './user-mmt.component.html',
  styleUrls: ['./user-mmt.component.less']
})
export class UserMmtComponent implements OnInit {

  constructor() { }
  isVisible = false;
  nzTitle = '';
  isVisibleAuthor = false;
  nzTitleAuthor = '数据权限';
  isVisiblePassword = false;
  nzTitlePassword = '修改密码';
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
    operaUser: true,
    dataTh: [
      {
        title: '用户名称',
      },
      {
        title: '用户账号',
      },
      {
        title: '角色',
      }
    ],
    tdItem: [
      { name: 'key' },
      { name: 'name' },
      { name: 'age' },
    ],
    dataSet: []
  }
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
        address: '上海市浦东新区盛夏路560号'
      },
      {
        key: '2',
        name: '刘畅',
        age: 25,
        number: 8,
        isOut: 0,
        address: '上海市浦东新区高科中路333号'
      },
      {
        key: '3',
        name: '左立军',
        age: 28,
        number: 3,
        isOut: 1,
        address: '上海市浦东新区祖冲之路40号'
      },
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 14,
        isOut: 0,
        address: '上海市浦东新区紫薇路18号'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 2,
        isOut: 1,
        address: '上海市浦东新区张江路88号'
      },
      {
        key: '3',
        name: '巫景飞',
        age: 32,
        number: 13,
        isOut: 0,
        address: '上海市浦东新区斜土路599号'
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
  /**编辑 */
  editTb(e: object) {
    this.isVisible = true;
    this.nzTitle = '编辑客户';
  }
  /**删除 */
  deleteTb(e: object) {
    console.log(e);
  }
  /** 权限*/
  authorityTb(e: object) {
    this.isVisibleAuthor = true;
  }
  /**修改密码 */
  passwordTb(e: object) {
    this.isVisiblePassword = true;
  }
  /** 查询*/
  search() {

  }
  /** 重置*/
  clean() {

  }
  /** 添加*/
  add() {
    this.isVisible = true;
    this.nzTitle = '新增客户';
  }
  handleOk(): void {
    this.isVisibleAuthor = false;
    this.isVisiblePassword = false;
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisibleAuthor = false;
    this.isVisiblePassword = false;
    this.isVisible = false;
  }
}
