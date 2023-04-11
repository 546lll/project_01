// 1.引入express
const { request, response } = require('express');
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则, request --对请求报文的封装；response --对响应报文的封装
// 直接挂载
app.get('/', (request, response) => {
    //设置响应
    response.send("hello express");

});

// 创建静态资源服务器
// app.use(express.static("./clock"));
// 挂载路径前缀
app.use('/clock', express.static("./clock"));

// 获取url中的动态参数
app.get('/server/:id/:name', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    
    //获取动态参数
    console.log(request.params);
    // 接收查询字符串
    let cb = request.query
    
    // 设置响应体
    response.send(request.params);

})


// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动...")
});

