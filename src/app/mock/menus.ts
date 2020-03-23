const menu = [
  {
    menuTitle: "首页",
    path: "/layout-default/home/index",
    icon: "home",
    children: []
  },
  {
    menuTitle: "角色权限",
    path: "",
    icon: "usergroup-delete",
    children: [
      {
        menuTitle: "权限管理",
        path: "/layout-default/userRight/right",
        icon: ""
      },
      {
        menuTitle: "成员管理",
        path: "/layout-default/userRight/user",
        icon: ""
      }
    ]
  }
];
export const MENUS = {
  "GET /menus": menu
};
