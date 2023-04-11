##CORS
在之前的server.js中设置过的

```js
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
```
##CORS中间件
```js
// 在所有路由之前定义
const cors = require('cors')
app.use(cors)
```
 文档[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)有更多介绍
