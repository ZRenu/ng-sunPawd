import { MockRequest } from "@delon/mock";
export const USERS = {
  "POST /login": (req: MockRequest) => {
    const data = req.body;
    if (data.params.username === "admin" && data.params.password === "1234") {
      return {
        status: "200",
        message: "ok",
        data: {
          token: "admin123456",
          name: data.params.username,
          id: 10000,
          applyName: "SUN PAWD BY RENU 后台管理系统前端框架",
          time: +new Date()
        }
      };
    } else {
      return {
        status: "401",
        message: "用户名或密码错误"
      };
    }
  }
};
