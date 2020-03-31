import { TbleComponent } from "./table.component";
/**
 * 表格配置
 */
export interface Table {
  /**
   * 数据数组
   */
  nzData?: any;
  /** 列描述 */
  column?: TBColumn[];
  /**
   * 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false
   */
  nzFrontPagination?: true;
  /**
   * 当前总数据，在服务器渲染时需要传入
   */
  nzTotal?: number;
  /**
   * 当前页码，可双向绑定
   */
  nzPageIndex?: number;
  /**
   * 每页展示多少数据，可双向绑定
   */
  nzPageSize?: number;
  /**
   * 是否显示分页器
   */
  nzShowPagination?: true;
  /**
   * 指定分页显示的位置
   */
  nzPaginationPosition?: "top" | "bottom" | "both";
  /**
   * 是否展示外边框和列边框
   */
  nzBordered?: false;
  /**
   * 正常或迷你类型
   */
  nzSize?: "middle" | "small" | "default";
  /**
   * 页面是否加载中
   */
  nzLoading?: false | true;
  /**
   * 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{ x: "300px", y: "300px" }
   */
  nzScroll?: {};
  /**
   * 无数据时显示内容
   */
  nzNoResult?: string;
  /** 选择框 */
  Checked?: boolean;
  /**
   * 按钮风格
   * 空 link
   * 按钮 type
   */
  btnStyle: string;
}
/**
 * 列描述
 */
export interface TBColumn {
  /**
   * 用于定义数据源主键
   */
  key?: string;
  /**
   * 列标题
   */
  title?: string;
  /**
   * 列数据在数据项中对应的 key，例如：
   * - `id`
   * - `price.market`
   * - `[ 'price', 'market' ]`
   */
  index?: string | string[] | null;
  /**
   * 指定该列宽度，表头未分组时可用
   */
  nzWidth?: string;
  /**
   * 左侧距离，用于固定左侧列
   */
  nzLeft?: string;
  /**
   * 右侧距离，用于固定右侧列
   */
  nzRight?: string;
  /**
   * 设置列内容的对齐方式
   */
  nzAlign?: "left" | "right" | "center";
  /**
   * 排序key，非受控模式使用，与 thead 中 nzSortChange 配合使用
   */
  nzSortKey?: string;
  /**
   * 是否显示过滤
   */
  nzShowFilter?: boolean;
  // 按钮组
  buttons?: TBColumButton[];
  /** 自定义列需要的字段 */
  /**
   *  列标题
   */
  label?: string;
  /**
   * 列数据在数据项中对应的 key
   */
  value?: string;
  /**
   * 是否确定展示本列
   */
  checked?: boolean;
}
// 图标配置
export interface TBIcon {
  /** 图标类型 */
  type: string;
  /** 图标主题风格，默认：`outline` */
  theme?: "outline" | "twotone" | "fill";
  /** 是否有旋转动画，默认：`false` */
  spin?: boolean;
  /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
  twoToneColor?: string;
  /** 指定来自 IconFont 的图标类型 */
  iconfont?: string;
  // 权限
  auth?: any;
}
/**
 * 按钮配置
 */
export interface TBColumButton {
  /**
   * 文本
   */
  text: string;
  /**
   * 图标
   */
  icon?: string | TBIcon;
  /**
   * 按钮类型
   */
  type?: "primary" | "dashed" | "danger" | "default" | "link";
  /** link按钮颜色 */
  linkColor?: string;
  /**
   * 按钮宽度
   */
  width?: string;
  // 权限
  auth?: any;
  /**
   * 标示，系统自定
   * add 添加
   * update 修改
   * del 删除
   *
   */
  mark: "A" | "B" | "C" | "D" | "E";
}
export type TBChangeType =
  | "loaded"
  | "pi"
  | "ps"
  | "checkbox"
  | "radio"
  | "sort"
  | "filter"
  | "click"
  | "dblClick"
  | "expand";
/**
 * 回调数据
 */
export interface TBChange {
  /**
   * index
   */
  i?: number;
  e?: Event;
  /**
   * 当前页码
   */
  pi?: number;
  /**
   * 每页数量
   */
  ps?: number;
  /**
   * 数据总量
   */
  total?: number;
  /**
   * `loaded` 参数
   */
  // loaded?: TBData[];
  /**
   * `checkbox` 参数
   */
  checkbox?: [];
  /**
   * 排序
   */
  sort?: {};
  /**
   * 行数据
   */
  rowData?: any;
  /**
   * 表格按钮标示
   *
   *
   *
   */
  tbBtnMark?: string;
}
