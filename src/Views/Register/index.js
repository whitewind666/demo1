import React, {Component} from 'react';
import {connect} from 'react-redux'
import {register} from "../redux/action";
import {Navigate} from "react-router";

import './style.css'

class Register extends Component {

    //初始化注册数据
    state = {
        username:'', //用户名
        password:'', //密码
        password2:''  //确认密码
    }
    // 点击注册调用
    register = () => {
        console.log(this.state)
        this.props.register(this.state)
    }

    toLogin = () => {
        alert('返回Login')
        /*this.props.history.replace('/Login')*/
        window.location.href ='../Login'
    }
    //处理输入数据的改变
    handleChange = (name,val) => {
        this.setState({
            [name] : val.target.value
        })
        //console.log(val.target.value)
    }

    render() {
        const {msg,navigateTo}=this.props.user
        if (navigateTo){
            return <Navigate to='navigateTo'/>
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
                        <input
                            type="password" className="login-tbx" placeholder="确认密码"
                            onChange={val =>{this.handleChange('password2',val)}}
                        />
                        <input
                            type="submit" className="login-btn" value="注册"
                            onClick={this.register}
                        />
                        <input
                            type="submit" className="login-btn" value="已有账户"
                            onClick={this.toLogin}
                        />
                    </div>
                </div>
            </div>

        );
    }
}



export default connect(
    state =>({user: state.user}),
    {register}
)(Register)

