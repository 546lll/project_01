// 1.引入express
const { request, response } = require('express');
const express = require('express');
// 2.创建应用对象
const app = express();


// 创建一个中间件函数
/* 
const mv = function(req, res, next) {
    console.log("这是最简单的中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next();
}
// 全局生效的中间件
app.use(mv);
*/
// 简化
app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const tt = Date.now();
    // 为req对象挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = tt;
    // console.log("这是最简单的中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next();
})

// 局部生效的中间件，不使用app.use()
const mv1 = function(req, res, next) {
    console.log("调用了第一个局部生效的中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next();
}
// 第二个
const mv2 = function(req, res, next) {
    console.log("调用了第二个局部生效的中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next();
}


// 3.向路由对象上挂载具体的路由
// 挂载获取用户列表的路由
// 包含了mv1，局部生效的中间件，只在当前路由生效
// 先交给中间件，再交给路由处理函数
app.get('/', mv1, mv2, (req, res) => {
    //设置响应
    res.send("Home Page " + req.startTime);

});

// 挂载添加用户的路由
app.post('/user', (req, res) => {
    //设置响应
    res.send("User Page " + req.startTime);

});


// 错误级别的中间件使用
// a.定义一个人为制作错误的路由
app.get('/err',(req, res) => {
    // 人为的抛出错误
    throw new Error("服务器内部发生了错误")
    // 发生错误后，下面的代码是没有执行的，直接进到错误级别的中间件中
    res.send("错误界面");

});
// b.定义错误级别的中间件,在所有路由之后哦
app.use((err, req, res, next) => {
    console.log("发生了错误" + err.message);
    res.send("Error: " + err.message);
})

// express内置的中间件
// 除了express.static()
/*
// express.json中间件，解析表单中JSON格式的数据
app.use(express.json()) 
*/
/*
// express.urlencoded: 解析URL-encoded格式的请求体数据
app.use(express.urlencoded({extended: false}));
//
*/

// 第三方中间件：按需安装
/*
// body-parser
// 内置的express.urlencoded模块是基于body-parser模块封装出来的
const parser = require("body-parser");
app.use(parser.urlencoded({extended: false}));

app.post('/user-json', (req, res) => {
    // 可以使用req.body来接收客户端发送的请求体数据
    // 没有配置解析表单数据中的中间件，req.bosy默认为undefined，

    res.send(req.body);

});
*/

// 自定义中间件：解析表单数据
// 导入模块
/*
const qs = require("querystring")
app.use((req, res, next) => {
    // 存储客户端发送的请求体数据
    let str = ''
    // 监听req.data事件
    req.on("data", (chunk) => {
        str += chunk;
    })
    // 监听req.end事件
    req.on('end', () => {
        //console.log(str);
        // 把字符串格式的请求体数据解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
});
*/ 
// 封装的中间件模块
const customParser = require("./bodyParser");
app.use(customParser)


app.post('/user-define', (req, res) => {
    // 可以使用req.body来接收客户端发送的请求体数据
    // 没有配置解析表单数据中的中间件，req.bosy默认为undefined，

    res.send(req.body);

});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 端口8000启动中...")
});