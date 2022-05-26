import {reqLogin, reqRegister} from "../../api";
import {AUTH_SUCCESS, ERR_MSG} from "./constant";

//授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

const errorMsg = (msg) => ({type: ERR_MSG, data: msg})

//注册异步action
export const register = (user) => {

    return async dispatch => {
        //  发送注册的异步ajax请求
        const response = await reqRegister(user)
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

//登陆异步action
export const login = (user) => {

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
