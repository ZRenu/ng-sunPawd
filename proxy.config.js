const PROXY_CONFIG = [{
  context: [
    "/api"
  ],
  // target: "http://192.168.1.89:8764/", //测试环境
  // target: "http://192.168.1.13:8764",  //测试环境
  // target: 'http://192.168.1.89:8764', //开发环境
  //target:'http://192.168.1.86:8764',   //开发环境
  // target: 'http://47.103.110.237:8764', //生产环境
  // target: 'http://localhost:8764', //本机环境
  // target: 'http://192.168.229.128:8764', //本机环境
  secure: false
}]

module.exports = PROXY_CONFIG;
