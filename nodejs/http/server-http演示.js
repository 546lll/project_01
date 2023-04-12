// 发送前的服务准备
// 1.导入http模块
const http = require("http")
// 2.创建web服务器实例 
const server = http.createServer()
// 3.为服务器实例绑定request事件，监听客户端发送的网络请求
server.on("request", function(req, res)  {
    // 只要有客户端来请求我们自己的服务端，就会出发request事件，调用事件处理函数
	// req是请求对象，包含了关于客户端相关的数据和属性
    // req.url，客户端请求的url地址
    // req.method，客户端的请求类型
    const url = req.url;
    // 根据不同的url设置不同的响应内容
    let content = "<h1>404 Not Found!</h1>"
    if (url === "/" || url === "/index.html") {
        content = "<h1>首页</h1>"
    }else if (url === "/about.html") {
        content = "<h1>关于页面</h1>"
    }

    console.log(`监听到客户端请求，其Url地址为${req.url}, 请求类型为${req.method}`)
    //解决中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res响应对象，向客户端x响应一些内容，结束此次请求
    res.end(content)

})
// 4.启动服务器
server.listen(8080, () => {
    console.log("服务器已经启动，端口8080监听中......")
})


