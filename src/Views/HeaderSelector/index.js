/*
选择用户头像的UI组件
 */

import React, {Component} from 'react'
import {Avatar, List,} from 'antd';
import PropTypes from 'prop-types'

import "./style.css"

export default class HeaderSelector extends Component {

    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }

    state = {
        icon: null //图片对象, 默认没有值
    }

    constructor(props) {
        super(props);
        this.state.headerList = []
        for (let i = 0; i < 21; i++) {
            this.state.headerList.push({
                text: '头像' + (i + 1),
                /* pic: require(`../../assets/images/headers/头像${i + 1}.png`)*/
            })
        }
    }

    handleClick = ({text, icon}) => {
        // 更新当前组件状态
        this.setState({icon})
        // 调用函数更新父组件状态
        this.props.setHeader(text)
    }

    render () {
        // 头部界面

        const data = this.state.headerList;
        // 头部界面
        const {icon} = this.state
        const listHeader = !icon ? '请选择头像' : (
            <div>
                已选择头像:<img src={icon}/>
            </div>
        )
        return (
            <List
                size="small"
                className="user_list"
                header={'选择头像'}
                grid={{
                    gutter: 1,
                    columns: 3,
                }}

                setheader={this.setHeader}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            onClick={this.handleClick}
                            avatar={<Avatar
                                src="https://joeschmoe.io/api/v1/random"
                                /*icon={item.pic}*/
                            />}
                        />

                        {/*<List.Item.Meta
                                    avatar={<Avatar
                                        src="https://joeschmoe.io/api/v1/random"
                                        icon={item.src}
                                    />}
                                >{item.src}</List.Item.Meta>*/}

                        <p style={{margin: '0px 0px 0px -4px'}}>{item.text}</p>
                    </List.Item>
                )}
            />
        )
    }
}
