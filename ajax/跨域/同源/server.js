// 引入express
const { response } = require("express");
const express = require("express");
// 创建应用对象
const app = express();
// 制定路由规则
app.get('/home', (request, response) => {
    // 响应一个页面
    // __dirname：根目录
    //页面和请求服务网站都是来自127.0.0.1:9000，所以是同源
    response.sendFile(__dirname + "/index.html");
    
})

app.get("/data", (request, response) => {
    response.send("兔年吉祥");
})

app.listen(9000, () => {
    console.log("服务已经启动，端口9000监听中......");
})

