import { MockRequest } from "@delon/mock";
export const USERS = {
  "POST /login": (req: MockRequest) => {
    const data = req.body;
    if (data.params.userName === "admin" && data.params.password === "1234") {
      return {
        status: "200",
        message: "ok",
        data: {
          token: "admin123456",
          name: data.params.userName,
          id: 10000,
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
