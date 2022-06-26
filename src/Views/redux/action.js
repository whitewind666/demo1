import {reqLogin, reqRegister} from "../../api";
import {AUTH_SUCCESS, ERR_MSG} from "./constant";

//授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

const errorMsg = (msg) => ({type: ERR_MSG, data: msg})

//注册异步action
export const register = (user) => {

    const {username, password, password2} = user
    if (!username) {
        return errorMsg('请输入用户名')
    } else if (password !== password2) {
        //表单前台验证，返回一个同步action
        return errorMsg('两次密码不相同')
    }

    return async dispatch => {
        //  发送注册的异步ajax请求
        const response = await reqRegister({username, password})
/*
        console.log(response)
*/
        const result = response.data
/*
        console.log(result.state)
*/
        if (result.code === 0) {
            //分发授权成功的action
            dispatch(authSuccess(result.data))
        } else {
            //分发错误提示的action
            dispatch(errorMsg(result.msg))
        }
    }
}

//登陆异步action
export const login = (user) => {

    const {username, password} = user
    if (!username) {
        return errorMsg('请输入用户名')
    } else if (!password) {
        //表单前台验证，返回一个同步action
        return errorMsg('请输入密码')
    }

    return async dispatch => {
        //  发送注册的异步ajax请求
        const response = await reqLogin(user)
        const result = response.data
        if (result.code === 0) {
            //分发授权成功的action
            dispatch(authSuccess(result.data))
        } else {
            //分发错误提示的action
            dispatch(errorMsg(result.msg))
        }
    }
}
