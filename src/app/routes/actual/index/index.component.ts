import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit, AfterViewInit {
  seamless: any;
  tabs = [1, 2, 3];
  tabsActive = 0;
  constructor() { }
  noticeData = [];
  ngOnInit() {
    this.seamless = require('seamscroll');
    this.notice();
  }
  notice() {
    for (let index = 0; index < 5; index++) {
      this.noticeData.push(
        { title: `2019-04-0${index} 12:23 设备编号XXXXXXXXXXXXXX  低温报警 ` }
      );
    }
  }
  start() {
    this.seamless.init({
      dom: document.getElementById('notice'),
      direction: 2,
    });
  }
  tag(i: number) {
    this.tabsActive = i;
  }
  ngAfterViewInit(): void {
    this.start();
  }
}
