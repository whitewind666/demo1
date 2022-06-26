import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERR_MSG} from "./constant";

const initUser = {
    username: '',
    msg: '',//提示错误信息
    navigateTo: '/' //需有重定向的路由路径
}

//产生user状态的reducer
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data, navigateTo: '/'}
        case ERR_MSG:
            return {...state, msg: action.data}

        default:
            return state
    }
}


export default combineReducers({
    user,
})
