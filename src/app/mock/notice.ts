const sourceData = [
  {
    description: "邮件系统更新",
    time: "昨天",
    type: "smile",
    color: ""
  },
  {
    description: "你有20封消息需要处理",
    time: "前天",
    type: "check-circle",
    color: "#52c41a"
  },
  {
    description: "操作系统说明已发送",
    time: "一周前",
    type: "heart",
    color: "#eb2f96"
  },
  {
    description: "你的5份周报已经送达",
    time: "1年前",
    type: "star",
    color: "#FF9900"
  },
  {
    description: "密码修改通知",
    time: "1月",
    type: "cloud",
    color: "#339966"
  }
];
const data = [
  {
    title: "权限请求",
    description: "操作员请求开通用删除权限"
  },
  {
    title: "事物处理",
    description: "系统已经完成第一阶段事物处理"
  },
  {
    title: "部署完成",
    description: "项目部署成功"
  },
  {
    title: "开发进度",
    description: "水电支付业务开发中"
  },
  {
    title: "接口通知",
    description: "接口已经更新"
  },
  {
    title: "部署完成",
    description: "项目部署成功"
  },
  {
    title: "开发进度",
    description: "水电支付业务开发中"
  },
  {
    title: "接口通知",
    description: "接口已经更新"
  }
];
export const NOTUCES = {
  "GET /notice": sourceData,
  "GET /msg": data
};
