import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Btns } from '../../../../shared/common/dw-btns/dw-btns.component';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less']
})
export class LineComponent implements OnInit {
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          }
        }
      },
      legend: {
        data: ['土温', '气温', '预警值'],
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
        data: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          }
        },
        axisTick: {
          show: false,
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
          textStyle: {
            color: '#18bdb1',
            fontSize: 16
          }
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#18bdb1',
            width: 2,
            type: 'solid'
          }
        }
      }],
      series: [{
        name: '土温',
        type: 'line',
        data: (function () {
          const d = [];
          for (let i = 0; i < 12; i++) {
            d.push(parseInt((Math.random() * (100 - 50 + 1) + 50).toString(), 10));
          }
          return d;
        })(),
        itemStyle: {
          normal: {
            color: '#00a1e4',
          }
        },
        lineStyle: {
          normal: {
            width: 4,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        }
      }, {
        name: '气温',
        type: 'line',
        data: (function () {
          const d = [];
          for (let i = 0; i < 12; i++) {
            d.push(parseInt((Math.random() * (90 - 40) + 40).toString(), 10));
          }
          return d;
        })(),
        itemStyle: {
          normal: {
            color: '#ffc600',
          }
        },
        lineStyle: {
          normal: {
            width: 4,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
      }, {
        name: '预警值',
        type: 'line',
        data: (function () {
          const d = [];
          for (let i = 0; i < 12; i++) {
            d.push(60);
          }
          return d;
        })(),
        itemStyle: {
          normal: {
            color: 'red',
          }
        },
        lineStyle: {
          normal: {
            width: 4,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
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
