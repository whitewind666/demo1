import React, {Component} from 'react';
import {connect,} from "react-redux";
import {Button, Input,} from 'antd';

import HeaderSelector from "../HeaderSelector";
import './style.css'

const {TextArea} = Input;

class Userworld extends Component {
    state = {
        header: {type: String},
        info: {type: String},
        telephone: {type: Number},
        userweb: {type: String},
        bbll: {type: String},
    }


    setHeader = (header) => {
        this.setState({
            header
        })
    }


    handleChange = (name, val) => {
        this.setState({
            [name]: val.target.value
        })
    }

    save = () => {
        console.log(this.state)
       /* console.log(this.state.headerList[0].text)*/
    }

    render() {

        return (
            <div className="user_content">
                <div className="user_body">
                    {/* 标题 */}
                    <div className="user_head">
                        <h1>啊啊啊啊</h1>
                    </div>

                    {/* 头像载入 */}
                    <HeaderSelector setHeader={this.setHeader}/>

                    {/* input框 */}
                    <div className="user_input" align="middle" style={{minHeight: '100vh'}}>
                        <Input.Group compact>
                            <Input style={{width: '10%'}} defaultValue="昵称"/>
                            <Input style={{width: '30%'}}
                                   placeholder="请输入昵称"
                                   onChange={val => {
                                       this.handleChange('info', val)
                                   }}
                            />
                        </Input.Group>
                        <br/>
                        <Input.Group compact>
                            <Input style={{width: '10%'}} defaultValue="电话"/>
                            <Input style={{width: '30%'}}
                                   type="number"
                                   placeholder="请输入电话"
                                   step="0.01" min="10000000000" max="19999999999"
                                   onChange={val => {
                                       this.handleChange('telephone', val)
                                   }}
                            />
                        </Input.Group>
                        <br/>
                        <Input.Group compact>
                            <Input style={{width: '10%'}} defaultValue="个人网站"/>
                            <Input style={{width: '30%'}}
                                   type="email"
                                   placeholder="请输入邮箱地址"
                                   onChange={val => {
                                       this.handleChange('userweb', val)
                                   }}
                            />
                        </Input.Group>
                        <br/>
                        <Input.Group compact>
                            <Input style={{width: '10%'}} defaultValue="4330"/>
                            <Input style={{width: '30%'}} defaultValue="9999"/>
                        </Input.Group>
                        <br/>
                        <div className="introduction">

                            <TextArea rows={4} maxLength={200}
                                      placeholder="简介"
                                      style={{resize: 'none'}}
                                      onChange={val => {
                                          this.handleChange('bbll', val)
                                      }}
                            />
                        </div>
                        <br/>
                        <Button onClick={this.save}>保存</Button>----------
                        <Button>取消</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(
    state => ({user: state.user}),
    {}
)(Userworld)
