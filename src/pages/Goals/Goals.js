import React from 'react';
import GoalsForm from "./GoalsForm";
import SideMenu from "../../layouts/SideMenu";
import GoalsItems from "./GoalsItems";

function Goals(props) {
    return (
        <div className="goals section">
            <SideMenu/>
            <div className="goals-section">
                <GoalsForm/>
                <GoalsItems />
            </div>
        </div>
    );
}

export default Goals;