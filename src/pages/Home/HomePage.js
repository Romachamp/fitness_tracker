import React, {useContext, useState} from 'react';
import HomeSetUp from "./HomeSetUp";
import HomeMain from "./HomeMain";

function HomePage(props) {

    const [isReady, setReady] = useState((prevState) => {
        const data = localStorage.getItem('isReady');
        return data ? JSON.parse(data) : false;
    });
    const [sport, setSport] = useState('');

    return (
        <div className="home-page">
            {isReady ? <HomeMain /> : <HomeSetUp sport={sport} setSport={setSport} setReady={setReady} />}
        </div>
    );
}

export default HomePage;