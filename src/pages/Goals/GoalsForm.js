import React, {useContext, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {goalsContext} from "../../context/goalsContext";

function GoalsForm(props) {

    const {goals, setGoals} = useContext(goalsContext);
    const [value, setValue] = useState('');
    const [day, setDay] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleTimeChange(e) {
        setDay(e.target.value);
    }

    function addItem(e) {
        setGoals((prevState) => {
            const newItems = prevState.slice();
            if (value) {
                const object = {
                    value: value,
                    day: day,
                    id: newItems.length
                }
                newItems.push(object);
                localStorage.setItem('goals', JSON.stringify(newItems));
            }
            return newItems;
        });
    }

    return (
        <form className="goals-form" style={{display: 'flex', alignItems: 'center'}}>
            <TextField id="standard-basic" label="Enter goal" variant="standard" onChange={handleChange}/>
            <FormControl fullWidth sx={{marginTop: '30px'}}>
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={day}
                    label="day"
                    onChange={handleTimeChange}
                >
                    <MenuItem value="Monday">Monday</MenuItem>
                    <MenuItem value="Tuesday">Tuesday</MenuItem>
                    <MenuItem value="Wednesday">Wednesday</MenuItem>
                    <MenuItem value="Thursday">Thursday</MenuItem>
                    <MenuItem value="Friday">Friday</MenuItem>
                    <MenuItem value="Saturday">Saturday</MenuItem>
                    <MenuItem value="Sunday">Sunday</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={addItem} sx={{marginTop: '30px'}}>Add</Button>
        </form>
    );
}

export default GoalsForm;