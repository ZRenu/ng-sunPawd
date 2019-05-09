import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';

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
  constructor(
    private api: ApiService
  ) { }
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
    const element = document.querySelector('.main-wrap');
    const list = element.classList;
    for (let index = 0; index < list.length; index++) {
      const e = list[index];
      if (e === 'fadeInRight') {
        element.classList.remove('fadeInRight');
        element.classList.add('bounceInRight');
      }
      if (e === 'bounceInRight') {
        element.classList.remove('bounceInRight');
        element.classList.add('fadeInRight');
      }

    }
  }
  an() {
    const element = document.querySelector('.main-wrap');
    element.classList.add('fadeInRight');
  }
  ngAfterViewInit(): void {
    this.start();
  }
}
