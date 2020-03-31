const menu = [
  {
    id: "001",
    menuTitle: "首页",
    path: "home/index",
    icon: "home",
    children: []
  },
  {
    id: "002",
    menuTitle: "角色权限",
    path: "",
    icon: "usergroup-delete",
    children: [
      {
        id: "003",
        menuTitle: "权限管理",
        path: "userRight/right",
        icon: ""
      },
      {
        id: "004",
        menuTitle: "成员管理",
        path: "userRight/user",
        icon: ""
      }
    ]
  }
];
export const MENUS = {
  "GET /menus": menu
};
