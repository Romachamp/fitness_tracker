import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import Goals from "../pages/Goals/Goals";
import Activity from "../pages/Activity/Activity";

function Layout(props) {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/goals" element={<Goals/>} />
                <Route path="/activity" element={<Activity/>} />
            </Routes>
        </HashRouter>
    );
}

export default Layout;