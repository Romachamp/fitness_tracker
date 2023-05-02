import React, {useContext} from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SettingsIcon from '@mui/icons-material/Settings';
import {userContext} from "../context/userContext";
import SchoolIcon from '@mui/icons-material/School';
import {useNavigate} from "react-router";

function SideMenu(props) {

    const {isUserExists, setUser} = useContext(userContext);
    const navigate = useNavigate();

    return (
        <header className="header-bar">
            <div className="header-container">
                <div className="header-greeting">
                    <h1 className="header-name">
                        {isUserExists.mail}
                    </h1>
                </div>
                <nav className="header-nav">
                    <ul className="header-list">
                        <li>
                            <Button startIcon={<HomeIcon/>} fullWidth onClick={(e) => navigate('/home')}>
                                Home
                            </Button>
                        </li>
                        <li>
                            <Button startIcon={<DirectionsRunIcon/>} fullWidth onClick={(e) => navigate('/goals')}>
                                Goals
                            </Button>
                        </li>
                        <li>
                            <Button startIcon={<TrendingUpIcon />} fullWidth onClick={(e) => navigate('/activity')}>
                                Activity
                            </Button>
                        </li>
                        <li>
                            <Button startIcon={<SettingsIcon/>} fullWidth onClick={(e) => navigate('/home')}>
                                Settings
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default SideMenu;