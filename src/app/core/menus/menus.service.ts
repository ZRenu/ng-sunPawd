import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: 'welcome',
      link: 'index',
      icon: 'home',
      children: [
        {
          text: 'Hi',
          link: 'welcome/hi',
          icon: '',
        },
        {
          text: 'table',
          link: 'welcome/table',
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
