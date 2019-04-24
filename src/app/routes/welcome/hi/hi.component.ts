import { Component, OnInit } from '@angular/core';
declare var BMap: any;
@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.less']
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.map();
  }
  map() {
    const map = new BMap.Map('container');    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity('北京');          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
    const styleJson = [
      {
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': {
          'hue': '#007fff',
          'saturation': 89
        }
      },
      {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': {
          'color': '#ffffff'
        }
      }
    ];
    map.setMapStyle({ styleJson: styleJson });
  }

}
