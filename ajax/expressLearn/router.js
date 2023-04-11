// ##路由模块
// 1.引入express
const express = require('express');
// 2.创建路由对象
const router = express.Router();
// 3.向路由对象上挂载具体的路由
// 挂载获取用户列表的路由
router.get('/user/list', (request, response) => {
    //设置响应
    response.send("Get user list");

});

// 挂载添加用户的路由
router.post('/user/add', (request, response) => {
    //设置响应
    response.send("Add new user");

});
// 4.向外共享路由对象
module.exports = router