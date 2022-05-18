import React from "react";

import './chat_content.css'
import '../icon/iconfont.css'
/*import './chat.css'*/
// import styles from './chat.module.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talk: {
                talkname: "",
                maker: "",
                msg: ""
            },
            ToastClass: "",
            SearchClass: "disnone",
            toast: "",
            SearchList: [],
            ChatList: [],
            ChatName: "",
            msgs: [],
            Isline: "offline animate__animated animate__fadeIn",
            IsChatline: "online animate__animated animate__fadeIn"
        }

    }
        render() {
            return (
                <div className="Chat_content">
                <div className="Chat_table">
                    <div className="Chat_left">
                        <div className="Chat_Left_head">
                            <div className="Chat_Left_img">

                            </div>
                        </div>
                        <div className="Chat_nav">
                            <input className="Chat_input"/>
                            <button className="iconfont">&#xe6b3;</button>
                            <button className="iconfont">&#xe6c0;</button>
                        </div>
                        <div className="Chat_refresh">
                            <button className="iconfont">&#xe6ae;</button>
                        </div>
                        <div className="Chat_list">

                        </div>
                    </div>

                    <div className="Chat_right">
                        <div className="Chat_Right_head">
                            <div className="Chat_Right_img"></div>
                            <div className="Chat_Right_name"></div>
                            <div className="Chat_Delete">
                                <button className="iconfont">&#xe6b1;</button>
                            </div>
                        </div>
                        <div className="Chat_body">

                        </div>
                        <div className="input_body">
                            <textarea></textarea>
                            <button className="iconfont">&#xe6b2;</button>
                        </div>
                    </div>
                </div>

                <div className={this.state.SearchClass}>
                    <div className="Search_head">
                        <button className="iconfont" onClick={this.shutdown}>&#xe6af;</button>
                    </div>
                    <div className="Search_list">
                        <table>
                            <tbody>
                            {
                                this.state.SearchList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.talkname}</td>
                                            <td>{item.maker}</td>
                                            <td className="Search_add">
                                                <button className="iconfont"
                                                        onClick={() => this.joinTalk(item.talkname)}>&#xe6b8;</button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            /* <div className="chat">

                 {/!*对话列表*!/}
                 <div className="list" >

                     <div className="left">
                         西坝路吗
                     </div>

                     <div className="right" >
                         head
                     </div>
                 </div>


                 {/!* 聊天界面*!/}
                 <div className="chat_body">
                     {/!*聊天内容*!/}
                     <div className="top">
                         talk
                     </div>

                     {/!*输入框*!/}
                    {/!* <div className={styles.footer}>*!/}
                     <div className="footer">
                         aaa
                     </div>
                 </div>
             </div>*/
            )
        }

}
export default Chat;
