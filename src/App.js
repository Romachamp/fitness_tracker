import './css/reset.css';
import Layout from "./layouts/Layout";
import {userContext} from "./context/userContext";
import {useState} from "react";
import {goalsContext} from "./context/goalsContext";


function App() {

    const [isUserExists, setUser] = useState((prevState) => {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data) : false;
    });

    const [goals, setGoals] = useState((prevState) => {
        const data = localStorage.getItem('goals');
        return data ? JSON.parse(data) : [];
    });

    return (
        <div className="App">
            <userContext.Provider value={{isUserExists, setUser}}>
                <goalsContext.Provider value={{goals, setGoals}}>
                    <Layout/>
                </goalsContext.Provider>
            </userContext.Provider>
        </div>
    );
}

export default App;