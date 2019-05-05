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
  }
  ngOnInit() {
  }
  active(e: number) {
    this.btnsData.active = e;
}
