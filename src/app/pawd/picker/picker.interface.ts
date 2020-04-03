export interface Picker {
  /**
   * 类型
   */
  type: "date" | "range";
  /**
   * large default small 大小
   */
  nzSize?: string;
  /**
   * 长度
   */
  width?: string;
  /**
   * 开始时间Holder
   */
  startPlaceHolder?: string;
  /**
   * 结束时间Holder
   */
  endtPlaceHolder?: string;
  /**
   * 是否开启今天
   */
  ShowToday?: boolean;
  /**
   * yyyy-MM-dd  yyyy-MM-dd HH:mm:ss 时间格式
   */
  Format?: string;
  /**
   * 是否显示清除按钮
   */
  nzAllowClear?: boolean;
  /**
   * 默认开始时间
   */
  startTime?: string;
  /**
   * 数据
   */
  data: PickerDate;
}
/**
 * 数据
 */
export interface PickerDate {
  /**
   * range类型
   */
  dateRange?: {
    startTime?: string;
    endTime?: string;
  };
  /**
   * date类型
   */
  date?: null;
}
