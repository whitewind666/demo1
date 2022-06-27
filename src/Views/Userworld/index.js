import React, {Component} from 'react';
import {connect,} from "react-redux";
import {Button, Card, Input, List,} from 'antd';

import './style.css'

const { TextArea } = Input;
class Userworld extends Component {
    constructor(props){
        super(props);
        this.headerList = []
            for (let i =0; i<20 ;i++){
               this.headerList.push({
                   text:'头像'+(i+1),
                   icon:require(`../../assets/images/headers/头像${i+1}.png`)
               })
        }
    }


    state={
        header:'',
        info:'',
        telephone:'',
        userweb:'',
        bbll:''
    }
    handelChange =(name,val)=>{
        this.setState({
            [name] : val.target.value
        })
    }

    save=()=>{
        console.log(this.state)
    }

    render() {
        const data =this.headerList;
        return (
            <div className="user_content">
                <div className="user_body">
                    {/* 标题 */}
                    <div className="user_head">
                        <h1>啊啊啊啊</h1>
                    </div>

                    {/* 头像载入 */}
                    <List
                        size="small"
                        className="user_list"
                        header={<div>选择头像</div>}
                        grid={{
                            gutter: 1,
                            columns:3,
                        }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card title={item.title}>
                                   <div>

                                   </div>
                                </Card>
                            </List.Item>
                        )}
                    >
                    </List>

                    {/* input框 */}
                    <div className="user_input"  align="middle" style={{minHeight:'100vh'}}>
                        <Input.Group compact
                                     onChange={val=>{this.handleChange('info',val)}}
                        >
                            <Input style={{ width: '10%' }} defaultValue="昵称" />
                            <Input style={{ width: '30%' }}  placeholder="请输入昵称" />
                        </Input.Group>
                        <br/>
                        <Input.Group compact
                                     onChange={val=>{this.handleChange('telephone',val)}}
                        >
                            <Input style={{ width: '10%' }} defaultValue="电话" />
                            <Input style={{ width: '30%' }}  placeholder="请输入电话" />
                        </Input.Group>
                        <br/>
                        <Input.Group compact
                                     onChange={val=>{this.handleChange('userweb',val)}}
                        >
                            <Input style={{ width: '10%' }} defaultValue="个人网站" />
                            <Input style={{ width: '30%' }}  placeholder="请输入邮箱地址" />
                        </Input.Group>
                        <br/>
                        <Input.Group compact>
                            <Input style={{ width: '10%' }} defaultValue="0571" />
                            <Input style={{ width: '30%' }} defaultValue="26888888" />
                        </Input.Group>
                        <br/>
                        <div className="introduction">

                            <TextArea rows={4} maxLength={200}
                                      placeholder="简介"
                                      style={{resize: 'none'}}
                                      onChange={val=>{this.handleChange('bbll',val)}}
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
    state=>({user: state.user}),
    {}
)(Userworld)
