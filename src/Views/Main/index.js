import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
//eslint-disable-next-line
import administrator from "../administrator";
import Userworld from "../Userworld";


class main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/userworld" element={<Userworld />}/>
                    <Route path="/administrator" element={<administrator/>}/>
                </Routes>
            </div>
        );
    }
}

export default main;
