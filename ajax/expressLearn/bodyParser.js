// 封装自定义中间件函数
const qs = require("querystring")
const bodyParser = (req, res, next) => {
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
}

module.exports = bodyParser;
