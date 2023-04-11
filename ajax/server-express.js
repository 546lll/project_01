// 发送前的服务准备
// 1.引入express
const { request, response } = require('express');
const express = require('express');
// 2. 创建应用对象，web服务器
const app = express();
// 3.创建路由规则, request --对请求报文的封装；response --对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    
    // 设置响应体
    response.send("hello Ajax");

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
    
    // 设置响应体
    response.send(request.params);

});
// all可以接受任意类型的请求,针对自定义的请求头要这样设置
app.all('/server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // ，所有类型的头信息都可接受，包括自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体，end里面只能存放字符串和BUFFER二进制数据
    // 响应一个数据，需要对对象进行字符串的转换
    // Express 的 res.end() 和 res.send() 方法的不同点：
    //      1.前者只能发送 string 或者 Buffer 类型，后者可以发送任何类型数据。
    //      2.从语义来看，前者更适合没有任何响应数据的场景，而后者更适合于存在响应数据的场景。
    const data= {
        name: 'zhangsan',
        gender: "man"
    }
    let str = JSON.stringify(data);
    response.send(data); 

});



// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(() => {
        response.send("延时响应");
    }, 3000);

});

//jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    const data= {
        name: 'zhangsan',
        gender: "man"
    }
    let str = JSON.stringify(data);
    response.send(str);

});

// JSONP服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        name: "zhangsan"
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

// 检测用户名
app.all('/check-username', (request, response) => {

    const data = {
        exist: 1,
        msg: "用户名已经存在"
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})


// 检测用户名jquery-jsonp
app.all('/jquery-check-username', (request, response) => {

    const data = {
        exist: 1,
        msg: "用户名已经存在!"
    };
    let str = JSON.stringify(data);
    // 接收callback
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
})

// 4.启动监听端口服务
app.listen(8000, () => {
    console.log("服务已经启动, 端口8000监听中...")
});
