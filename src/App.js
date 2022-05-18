import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Login from "./Views/Login";
import Chat from "./Views/Chat/demo.js";
import Register from './Views/Register'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/Login" exact element={<Login/>} />
                <Route path="/Register"  element={<Register/>} />
                <Route path="/Chat"  element={<Chat/>} />
                <Route path="/"  element={<Navigate to="/Login"/>} />
            </Routes>
        </div>
    );
}
