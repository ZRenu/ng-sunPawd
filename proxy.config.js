const PROXY_CONFIG = [{
  context: [
    "/api"
  ],
  target: 'xxx:8889',
  secure: false
}]
module.exports = PROXY_CONFIG;
