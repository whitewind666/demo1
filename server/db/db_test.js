/*1. 连接数据库*/
const md5 = require('blueimp-md5') ///md5加密的函数
//1.1. 引入 mongoose
const mongoose = require('mongoose')
const e = require("express");
//1.2. 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/db_test')
//1.3. 获取连接对象
const conn = mongoose.connection
console.log('coon')
//1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', function () {
    console.log('hello world')
})

// 2. 得到对应特定集合的 Model
// 2.1. 字义 Schema(描述文档结构)
const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: dashen/laoban
})
// 2.2. 定义 Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema) //集合名称为user

/*
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
*/

//3.1. 通过 Model 实例的 save()添加数据
function testSave() {
    //创建Username的实例
    const userModel = new UserModel({username: 'Drunt', password: md5('123'), type: 'dashen'})
    //调用save（）保存数据
    userModel.save(function (error, user) {
        console.log('save()', error, user)
    })
}

/*testSave();*/

//3.2. 通过 Model 的 find()/findOne()查询多个或一个数据
function testfind() {
    //查询多个数据
    UserModel.find(function (error, users) {
        console.log('find()', error, users)
    })
    //查询一个数据
    UserModel.findOne({_id: '628c9f68f9870b601989d773'}, function (error, user) {
        console.log('findOne()', error, user)
    })
}

//testfind();

//3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据
function testUpdata() {
    UserModel.findByIdAndUpdate({_id: '628c9f20b2382e58138dba35'}, {username: 'Wiggins'}, function (err, doc) {
        console.log('findByIdAndUpdate()', err, doc)//doc显示更改前的信息
    })
}

//testUpdata()

//3.4. 通过 Model 的 remove()删除匹配的数据
function testDelete() {

    UserModel.remove({username: 'Drunt'}, function (error, doc) {
        console.log('remove()', error, doc)
        // { acknowledged: true, deletedCount: 1 }
        //
    })
}

testDelete()
