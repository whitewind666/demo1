/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */
import ajax from "./ajax";

//注册接口
export const reqRegister = (user) => {
  return ajax('/Register',user,'POST')
}
//登陆借口
export const reqLogin = ({username, password}) => {
    return  ajax('/Login', {username, password},'POST')
}
// 更新用户接口
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')
