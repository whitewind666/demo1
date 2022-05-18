import React, {Component} from 'react';

import './style.css'

class Login extends Component {

    //初始化注册数据
    state = {
        username:'', //用户名
        password:'', //密码
    }

    /*//保存用户名到状态中
    saveUsername = (event)=>{
        this.setState({username:event.target.value})
    }

    //保存密码到状态中
    savePassword = (event)=>{
        this.setState({password:event.target.value})
    }*/

    login = () => {
        console.log(this.state)
        alert(`登陆成功！`)
        window.location.href ='../Chat'
    }
    register = () => {
        alert(`注册页面`)
        window.location.href ='../Register'
    }

    //处理输入数据的改变
        handleChange = (name,val) => {
        this.setState({
            [name] : val
        })
    }


    render() {
        return (
            <div className="Login_content">
                <div className="container">
                    <h1>OurTalk</h1>
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
                               onClick={this.register}
                        />
                    </div>
                </div>
            </div>

        );
    }
}



export default Login;
