import {combineReducers} from "redux";
import {AUTH_SUCCESS, ERR_MSG} from "./constant";

const initUser = {
    username: '',
    msg: '',//提示错误信息
}

//产生user状态的reducer
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, ...action.data}
        case ERR_MSG:
            return {...state, msg: action.data}

        default:
            return state
    }
}


export default combineReducers({
    user,
})
