import React, {Component} from 'react';
import {connect} from 'react-redux'
import {login} from "../redux/action";
import {Navigate} from "react-router-dom";

import './style.css'


class Login extends Component {

    //初始化注册数据
    state = {
        username:'', //用户名
        password:'', //密码
    }

    login = () => {
        console.log(this.state)
        alert(`登陆成功！`)
        this.props.login(this.state)
/*
        window.location.href ='../Chat'
*/
    }
    toRegister = () => {
        alert(`注册页面`)
        window.location.href ='../Register'
    }

    //处理输入数据的改变
        handleChange = (name,val) => {
        this.setState({
            [name] : val.target.value
        })
    }


    render() {

        const {msg, navigateTo} = this.props.user
        //判断是否有值，user有值重定向到Chat
        if (!navigateTo) {
            return <Navigate to="/Chat"/>
        }

        return (
            <div className="Login_content">
                <div className="container">
                    <h1>OurTalk</h1>
                    {msg ? <div className='error-msg'>{msg}</div> : null} {/*提示密码错误*/}
                    <div className="form">
                        <input
                            type="text" className="login-tbx" placeholder="账号"
                            onChange={val =>{this.handleChange('username',val)}}
                        />
                        <input
                            type="password" className="login-tbx" placeholder="密码"
                            onChange={val =>{this.handleChange('password',val)}}
                        />
                        <input type="submit" className="login-btn" value="登录"
                               onClick={this.login}
                        />
                        <input type="submit" className="login-btn" value="注册"
                               onClick={this.toRegister}
                        />
                    </div>
                </div>
            </div>

        );
    }
}


export default connect(
    state => ({user: state.user}),
    {login}
)(Login)
