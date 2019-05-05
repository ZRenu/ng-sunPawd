import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    // {
    //   text: 'welcome',
    //   link: 'index',
    //   icon: 'home',
    //   children: [
    //     {
    //       text: 'Hi',
    //       link: 'welcome/hi',
    //       icon: '',
    //     },
    //     {
    //       text: 'table',
    //       link: 'welcome/table',
    //       icon: '',
    //     }
    //   ]
    // },
    {
      text: '实时数据',
      link: 'actual/index',
      icon: 'bank',
      children: []
    },
    {
      text: '牧场环境',
      link: 'environment/index',
      icon: 'line-chart',
      children: []
    },
    {
      text: '设备信息',
      link: 'equ-info/index',
      icon: 'barcode',
      children: []
    },
    {
      text: '设备数据',
      link: 'equ-data',
      icon: 'profile',
      children: [
        {
          text: '明细数据',
          link: 'equ-data/detail-data',
          icon: '',
        },
        {
          text: '日统计表',
          link: 'equ-data/detail-sst',
          icon: '',
        },
        {
          text: '月统计表',
          link: 'equ-data/monthly-sst',
          icon: '',
        },
        {
          text: '年统计表',
          link: 'equ-data/year-sst',
          icon: '',
        }
      ]
    },
    {
      text: '告警日志',
      link: 'alarm-log/index',
      icon: 'reconciliation',
      children: []
    },
    {
      text: '系统管理',
      link: 'system-mmt',
      icon: 'setting',
      children: [
        {
          text: '客户管理',
          link: 'system-mmt/customer',
          icon: '',
        },
        {
          text: '牧场管理',
          link: 'system-mmt/meadow',
          icon: '',
        },
        {
          text: '用户管理',
          link: 'system-mmt/user',
          icon: '',
        },
        {
          text: '角色管理',
          link: 'system-mmt/role',
          icon: '',
        },
        {
          text: '菜单管理',
          link: 'system-mmt/menu',
          icon: '',
        },

      ]
    },
    {
      text: '字典管理',
      link: 'dictionary-mmt',
      icon: 'read',
      children: [
        {
          text: '牧畜品类',
          link: 'dictionary-mmt/Livestock',
          icon: '',
        }
      ]
    },
  ];
  menus() {
    return this._Menus;
  }
}
/** 菜单类：待用 */
export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** 路由 */
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
