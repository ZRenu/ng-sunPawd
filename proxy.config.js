const PROXY_CONFIG = [{
  context: [
    "/api"
  ],
  target: 'xxx:8080',
  secure: false
}]
const exports = module.exports;
exports = PROXY_CONFIG;
