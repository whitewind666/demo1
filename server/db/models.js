/*
* 包含n个操作的数据库模块
* */

/*1. 连接数据库*/
//1.1. 引入 mongoose
const mongoose = require('mongoose')
//1.2. 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/chat')
//1.3. 获取连接对象
const conn = mongoose.connection
//1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected',function(err){
    if(err){
        console.log('连接数据库失败：'+err);
    }else{
        console.log('连接数据库成功！');
    }
});

/*2. 得到对应特定集合的 Model*/
//2.1. 字义 Schema(描述文档结构)
const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
})
//2.2. 定义 Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema)
//2.3暴露Model
exports.UserModel = UserModel


/*3. 通过 Model 或其实例对集合数据进行 CRUD 操作*/
//3.1. 通过 Model 实例的 save()添加数据
//3.2. 通过 Model 的 find()/findOne()查询多个或一个数据
//3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据
//3.4. 通过 Model 的 remove()删除匹配的数据
