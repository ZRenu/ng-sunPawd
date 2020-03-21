const PROXY_CONFIG = [{
  context: [
    "/api"
  ],
  target: 'http://192.168.1.89:8889/',
  secure: false
}]
module.exports = PROXY_CONFIG;
