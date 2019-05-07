import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Btns } from '../../../../shared/common/dw-btns/dw-btns.component';
import * as echarts from 'echarts';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {

  chartOption: any;
  constructor() { }
  btnsDataCharts: Btns = {
    data: [
      { 'title': '温度', value: 1 },
      { 'title': '湿度', value: 2 },
      { 'title': '光照亮度', value: 3 },
      { 'title': '二氧化碳', value: 4 },
    ],
    active: 0,
    size: 'small'
  };
  ngOnInit() {
    this.init();
    fromEvent(window, 'resize')
      .subscribe(() => this.init());
    this.init();
  }
  init() {
    this.chartOption = {
      title: {
        text: '牧场1号 牧场平均步数统计（最近七天）',
        textStyle: {
          fontSize: 14,
          color: '#808080'
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['平均步数'],
        align: 'right',
        right: 20,
        textStyle: {
          color: '#18bdb1'
        },
        itemGap: 30,
        itemWidth: 30,
        itemHeight: 10,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [
          '4月2日',
          '4月3日',
          '4月4日',
          '4月5日',
          '4月6日',
          '4月7日',
          '4月8日'
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#18bdb1',
            fontSize: 14
          }
        },
      }],
      yAxis: [{
        type: 'value',
        splitNumber: 6,
        axisLabel: {
          formatter: '{value}',
          fontSize: 14
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          },
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          }
        }
      }],
      series: [{
        name: '平均步数',
        type: 'bar',
        data: (function () {
          const d = [];
          for (let i = 0; i < 7; i++) {
            d.push(parseInt((Math.random() * (5000 - 50 + 1) + 50).toString(), 10));
          }
          return d;
        })(),
        barWidth: 30, //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#8ce5d0'
            }, {
              offset: 1,
              color: '#18bdb1'
            }]),
            opacity: 1,
          }
        }
      }]
    };
  }
  active(e: object, type: string) {
    this.btnsDataCharts.active = e['i'];
    this.init();
  }
}
