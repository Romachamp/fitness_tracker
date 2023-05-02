import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";

function ActivityPage(props) {

    const object = JSON.parse(localStorage.getItem('sportUserData'));

    const [boxing, setBoxing] = useState((prevState) => {
        const data = localStorage.getItem('boxingState');
        return data ? JSON.parse(data) : false;
    });

    const [boxingSpeed, setBoxingSpeed] = useState((prevState) => {
        const data = localStorage.getItem('BoxingSpeed');
        return data ? data : '';
    });

    const [history, setHistory] = useState((prevState) => {
        const data = localStorage.getItem('ActivityHistory');
        return data ? JSON.parse(data) : [];
    });

    function getCurrentDate() {
        const date = new Date();
        const day = date.getDay().toString();
        const month = date.getMonth().toString();
        const year = date.getFullYear().toString();
        const currentDate = day + '/' + month + '/' + year;
        return currentDate;
    }

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        if (minutes === '0') {
            return hours + ':' + minutes + '0';
        } else {
            if (Number(minutes) < 10) {
                return hours + ':' + '0' + minutes;
            } else {
                return hours + ':' + minutes;
            }
        }
    }

    function handleClick(e) {
        setBoxing((prevState) => {
            const newState = prevState === true ? false : true;
            localStorage.setItem('boxingState', JSON.stringify(newState));
            return newState;
        });
        if (e.target.id === 'button1' || e.target.id === 'button1-run' || e.target.id === 'button1-football') {
            setHistory((prevState) => {
                const newItems = prevState.slice();
                const currentDate = getCurrentDate();
                const time = getCurrentTime();
                let object;
                if (newItems.length !== 0) {
                    const currentItem = newItems[newItems.length - 1].value;
                    if (Number(currentItem) < Number(boxingSpeed)) {
                        object = {
                            value: boxingSpeed,
                            date: currentDate,
                            time: time,
                            additional: '+'
                        }
                    } else {
                        object = {
                            value: boxingSpeed,
                            date: currentDate,
                            time: time,
                            additional: '-'
                        }
                    }
                } else {
                    object = {
                        value: boxingSpeed,
                        date: currentDate,
                        time: time,
                        additional: '+'
                    }
                }
                newItems.push(object);
                localStorage.setItem('ActivityHistory', JSON.stringify(newItems));
                return newItems;
            });
        }
    }

    return (
        <div className="activity-page goals-section">
            {object.sport === 'Boxing' ?
                <div className="boxing-activity">
                    <h1 className="activity-title">{object.sport} activity</h1>
                    {boxing ?
                        <div className="current-activity">
                            <div><h1>{boxingSpeed}</h1> <h3>rounds per day</h3></div>
                            <Button variant="contained" onClick={handleClick} sx={{marginTop: '30px'}}>Change</Button>
                        </div>
                        :
                        <form className="activity-form"
                              style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                            <TextField id="standard-basic" label="Rounds per day" variant="standard"
                                       onChange={(e) => setBoxingSpeed((prevState) => {
                                           localStorage.setItem('BoxingSpeed', e.target.value);
                                           return e.target.value;
                                       })}/>
                            <Button variant="contained" onClick={handleClick} id="button1">Add</Button>
                        </form>
                    }
                </div>
                :
                ''}
            {object.sport === 'Running' ?
                <div className="boxing-activity">
                    <h1 className="activity-title">{object.sport} activity</h1>
                    {boxing ?
                        <div className="current-activity">
                            <div><h1>{boxingSpeed}</h1> <h3>time per 1 km</h3></div>
                            <Button variant="contained" onClick={handleClick} sx={{marginTop: '30px'}}
                                    id="button2">Change</Button>
                        </div>
                        :
                        <form className="activity-form"
                              style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                            <TextField id="standard-basic" label="Time per 1 km" variant="standard"
                                       onChange={(e) => setBoxingSpeed((prevState) => {
                                           localStorage.setItem('BoxingSpeed', e.target.value);
                                           return e.target.value;
                                       })}/>
                            <Button variant="contained" onClick={handleClick} id="button1-run">Add</Button>
                        </form>
                    }
                </div>
                :
                ''}
            {object.sport === 'Football' ?
                <div className="boxing-activity">
                    <h1 className="activity-title">{object.sport} activity</h1>
                    {boxing ?
                        <div className="current-activity">
                            <div><h1>{boxingSpeed}</h1> <h3>goals per game</h3></div>
                            <Button variant="contained" onClick={handleClick} sx={{marginTop: '30px'}}>Change</Button>
                        </div>
                        :
                        <form className="activity-form"
                              style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                            <TextField id="standard-basic" label="Goals per game" variant="standard"
                                       onChange={(e) => setBoxingSpeed((prevState) => {
                                           localStorage.setItem('BoxingSpeed', e.target.value);
                                           return e.target.value;
                                       })}/>
                            <Button variant="contained" onClick={handleClick} id="button1-football">Add</Button>
                        </form>
                    }
                </div>
                :
                ''}
            <div className="activity-history_section">
                <div className="activity-history">
                    {history.map(item =>
                        <div className="history-item">
                            <div className="history-data">
                                <h3 className="history-item_title">{item.value}</h3>
                                <h3 className="history-item_time">{item.time}</h3>
                                <h3 className="history-item_date">{item.date}</h3>
                            </div>
                            {item.additional === '-' ?
                                <h1 className="history-item_additional additional-minus">{item.additional}</h1>
                                :
                                <h1 className="history-item_additional additional-plus">{item.additional}</h1>
                            }
                        </div>)}
                </div>
                {history.length !== 0 ?
                    history.length > 1 ?
                        history[history.length - 1].additional === '-' ? 'Your result is worse. Do not give up' : 'Your result is better. Keep going'
                        :
                        history[history.length - 1].additional === '+' ? 'Good start. Keep going' : ''
                    :
                    ''}
                {history.length !== 0 ?
                    <Button variant="contained" onClick={(e) => setHistory((prevState) => {
                        const arr = [];
                        localStorage.setItem('ActivityHistory', JSON.stringify(arr));
                        return [];
                    })} sx={{marginTop: '30px', textAlign: 'center'}}>Clear history</Button>
                    :
                    <Button variant="contained" disabled sx={{marginTop: '30px', textAlign: 'center', display: 'flex'}}>Clear
                        history</Button>
                }

            </div>
        </div>
    );
}

export default ActivityPage;