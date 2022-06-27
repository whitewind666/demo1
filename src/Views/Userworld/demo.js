import React, {Component} from 'react';
import {connect,} from "react-redux";
import {Card, List,} from 'antd';

class Demo extends Component {
    state = {
        header: '', info: '', telephone: '', userweb: '', bbll: ''
    }

    constructor(props) {
        super(props);
        this.state.headerList = []
        for (let i = 0; i < 20; i++) {
            this.state.headerList.push({
                index: i, text: '头像' + (i + 1), icon: import(`../../assets/images/headers/头像${i + 1}.png`)
            })
        }
    }

    render() {
        const data = this.state.headerList;
        return (<div className="user_content">
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
                            gutter: 1, columns: 3,
                        }}
                        dataSource={data}
                        renderItem={(item) => (<List.Item>
                                <Card title={item.title}>
                                    <div>
                                        {this.state.headerList.map((headerPic, index) => (
                                            <div key={index}> {headerPic.text} {headerPic.icon}</div>))}

                                    </div>
                                </Card>
                            </List.Item>)}
                    >
                    </List>

                </div>
            </div>);
    }
}

export default connect(state => ({user: state.user}), {})(Demo)
