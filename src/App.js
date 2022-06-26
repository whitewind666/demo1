import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import './assets/css/index.less'

import Login from "./Views/Login";
import Chat from "./Views/Chat/demo.js";
import Register from './Views/Register'
import {Provider} from "react-redux";
import store from './Views/redux/store'
import Userworld from "./Views/Userworld";
import Administrator from "./Views/administrator";


export default function App() {
    return (
        <div>
            <Provider store={store}>
                <Routes>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Userworld" element={<Userworld />}/>
                    <Route path="/Administrator" element={<Administrator/>}/>
                    <Route path="/Chat" element={<Chat/>}/>
                    <Route path="/" element={<Navigate to="/Login"/>}/>
                </Routes>
            </Provider>
        </div>
    );
}
