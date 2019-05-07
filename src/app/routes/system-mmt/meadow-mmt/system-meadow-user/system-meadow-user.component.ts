import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DwTable } from '../../../../shared/common/dw-table/dw-table.component';

@Component({
  selector: 'app-system-meadow-user',
  templateUrl: './system-meadow-user.component.html',
  styleUrls: ['./system-meadow-user.component.less']
})
export class SystemMeadowUserComponent implements OnInit {

  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router,
  ) { }
  isVisible = false;
  nzTitle = '';
  tableDatas: DwTable = {
    loading: false,
    bordered: false,
    itemLength: 0,
    size: 'default',
    pagination: true,
    total: 0,
    pageSize: 10,
    pageIndex: 1,
    operate: true,
    meadow: false,
    nzScroll: { x: '1000px' },
    nzWidth: '200px',
    dataTh: [
      {
        title: '牧场名称',
      },
      {
        title: '牧场地址',
      },
      {
        title: '属于客户',
      },
      {
        title: '联系电话'
      }
    ],
    tdItem: [
      { name: 'name' },
      { name: 'address' },
      { name: 'name' },
      { name: 'number' },
    ],
    dataSet: []
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      console.log('Params', params.id);
    });
    this.tableList();
  }
  tableList() {
    const dataSet = [
      {
        key: '1',
        name: '莫希宇',
        age: 26,
        number: 18917396028,
        isOut: 0,
        address: '上海市浦东新区盛夏路560号'
      },
      {
        key: '2',
        name: '刘畅',
        age: 25,
        number: 18917396028,
        isOut: 0,
        address: '上海市浦东新区高科中路333号'
      },
      {
        key: '3',
        name: '左立军',
        age: 28,
        number: 18917396028,
        isOut: 1,
        address: '上海市浦东新区祖冲之路40号'
      },
      {
        key: '1',
        name: '李现',
        age: 22,
        number: 18917396028,
        isOut: 0,
        address: '上海市浦东新区紫薇路18号'
      },
      {
        key: '2',
        name: '陈哲',
        age: 42,
        number: 18917396028,
        isOut: 1,
        address: '上海市浦东新区张江路88号'
      },
      {
        key: '3',
        name: '巫景飞',
        age: 32,
        number: 18917396028,
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
    this.nzTitle = '编辑联系人';
  }
  /**删除 */
  deleteTb(e: object) {
    console.log(e);
  }
  /** 预警*/
  warningTb(e: object) {
    console.log(e);
  }
  /** 牧场范围*/
  meadowTb(e: object) {
    console.log(e);
  }
  /** 联系人*/
  userTb(e: object) {
    this.router.navigate(['default/system-mmt/meadow-user', 23]);
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
    this.nzTitle = '新增联系人';
  }
  toRouter() {
    this.router.navigate(['default/system-mmt/meadow']);
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
