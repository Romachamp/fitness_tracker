import React from 'react';
import SideMenu from "../../layouts/SideMenu";
import ActivityPage from "./ActivityPage";

function Activity(props) {
    return (
        <div className="section">
            <SideMenu />
            <ActivityPage />
        </div>
    );
}

export default Activity;