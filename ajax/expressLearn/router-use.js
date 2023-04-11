// 1.引入express
const express = require('express');
// 2.创建应用对象
const app = express();
// 3。模块化路由
// 3.1 导入路由模块
const router = require("./router")
const apiRouter = require("./apiRouter")
// 3.2 注册路由模块
// app.use函数的作用是来注册全局中间件
// app.use(router); 
// express.urlencoded: 解析URL-encoded格式的请求体数据
app.use(express.urlencoded({extended: false}));


// 解决接口跨域
// a.必须在配置cors中间件之前，配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    // 得到函数名称
    const funcName = req.query.callback
    // 发送到客户端的数据对象
    const data = {
        name: "xiaoer",
        age: 23,
        msg: "ok"
    }
    // 定义模版字符串，一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    // 响应给客户端
    res.send(scriptStr);

})
// b.cors中间件--解决接口跨域
const cors = require('cors')
app.use(cors());

// 为路由模块添加前缀
app.use('/a', router); 
app.use('/api', apiRouter); 

// 4.监听端口启动服务
app.listen(9000, () => {
    console.log("服务已经启动,端口9000监听中...")
});