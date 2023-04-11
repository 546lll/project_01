// ##路由模块
// 1.引入express
const express = require('express');
// 2.创建路由对象
const router = express.Router();
// 3.向路由对象上挂载具体的路由
// 挂载获取用户列表的路由
router.get('/get', (req, res) => {
    // 获取客户端的查询字符串
    const query = req.query;
    //  向向客户端响应结果
    res.send({
        status: 0,      // 0-处理成功;1-处理失败
        msg : "GET请求成功",// 状态的响应
        data: query
    });

});


router.post('/post', (req, res) => {
    // 获取客户端的查询字符串
    const body = req.body;
    //  向向客户端响应结果
    res.send({
        status: 0,      // 0-处理成功;1-处理失败
        msg : "GET请求成功",// 状态的响应
        data: body
    });

});

// 4.向外共享路由对象
module.exports = router