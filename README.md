# 鹿途后台管理系统基础框架

[鹿途](https://github.com/ZhouRenYou/ng-deerway)

##  项目说明

项目是一个干净可移植的基础框架，即开即用。

## 版本说明

```ts
"@delon/acl": "^1.5.1",
"@delon/auth": "^1.5.1",
"@delon/theme": "^1.5.1",
"ng-zorro-antd": "^1.8.1"
```

### 用户认证

[@delon/auth](https://ng-alain.com/auth/getting-started)


```ts

constructor( @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) {
    // 设置认证信息
    tokenService.set({token:'token'})
    // 获取认证信息
    tokenService.get().token; // token
    // 清除认证信息
    tokenService.clear()
}
```

## 第三方资源

图标：[iconfont](http://iconfont.cn)

地图：[baidumaps](http://lbsyun.baidu.com/)

图表：[echarts](http://echarts.baidu.com/index.html)

