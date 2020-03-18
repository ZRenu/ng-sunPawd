const PROXY_CONFIG = [{
  context: [
    "/api"
  ],
  target: 'xxx:8080',
  secure: false
}]

module.exports = PROXY_CONFIG;
