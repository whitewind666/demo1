const express = require('express');
const router = express.Router();

const {UserModel} = require("../db/models");
const md5 = require('blueimp-md5')
const filter = {password: 0} // 指定过滤的属性

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


//注册的路由
router.post('/Register', function (req, res) {
  // 读取请求参数数据
  const {username, password} = req.body
  // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
  // 查询(根据username)
  UserModel.findOne({username}, function (err, user) {
    // 如果user有值(已存在)
    if (user) {
      // 返回提示错误的信息
      res.send({code: 1, msg: '此用户已存在'})
    } else { // 没值(不存在)
      new UserModel({username, password: md5(password)}).save(function (error, user) {
        // 生成一个cookie(userid: user._id), 并交给浏览器保存
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
        // 返回包含user的json数据
        const data = {username, _id: user._id} // 响应数据中不要携带password
        res.send({code: 0, data})

      })
    }
  })
  // 返回响应数据
})

//登陆的路由
router.post('/Login',function (req, res){
  const {username,password} = req.body;
  UserModel.findOne({username, password:md5(password)}, filter, function (err, user){
    if (user){
      // 生成一个cookie(userid: user._id), 并交给浏览器保存
      res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
      //
      res.send({code: 1, data: user})
    }else {
      res.send({code: 0, msg:'密码错误'})
    }
  })
})


module.exports = router;
