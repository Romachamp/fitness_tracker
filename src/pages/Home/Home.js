import React from 'react';
import SideMenu from "../../layouts/SideMenu";
import HomePage from "./HomePage";

function Home(props) {
    return (
        <div className="home">
            <div className="home-container">
                <SideMenu/>
                <HomePage />
            </div>
        </div>
    );
}

export default Home;