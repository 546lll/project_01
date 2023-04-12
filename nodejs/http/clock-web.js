// 发送前的服务准备
// 1.导入需要的模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// 2.1创建web服务器
const server = http.createServer()
// 2.2为服务器实例绑定request事件，监听客户端发送的网络请求
server.on("request", function(req, res)  {
    
    // 3.将资源的请求url地址映射为文件的存放路径
    const url = req.url;
    
    // /clock/index.html、/clock/index.html;/clock/index.js
    // const fpath = path.join(__dirname, url)

    // 5.优化资源请求路径
    let fpath = "";
    if (url === "/") fpath = path.join(__dirname, "./clock/index.html");
    else fpath = path.join(__dirname, "./clock", url);
    // res.setHeader('Content-Type", "text/html;chartset="utf-8"');   // 这句不能加，会出错
    // 4.读取文件内容
    console.log(fpath);
    fs.readFile(fpath, "utf-8", (err, dataStr) => {
        if (err) return res.end('<h1>404 Not Found</h1>');
        else return res.end(dataStr);
    })

})
// 2.3启动服务器
server.listen(8080, () => {
    console.log("服务器已经启动，端口8080监听中......")
})



