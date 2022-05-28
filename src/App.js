import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Login from "./Views/Login";
import Chat from "./Views/Chat/demo.js";
import Register from './Views/Register'
import {Provider} from "react-redux";
import store from './Views/redux/store'


export default function App() {
    return (
        <div>
            <Provider store={store}>
            <Routes>
                <Route path="/Login" exact element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Chat" element={<Chat/>}/>
                <Route path="/" element={<Navigate to="/Login"/>}/>
            </Routes>
            </Provider>
        </div>
    );
}
