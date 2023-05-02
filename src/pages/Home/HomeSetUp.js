import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function HomeSetUp(props) {

    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        props.setSport(event.target.value);
    };

    function getWeight(e) {
        setWeight(e.target.value);
    }

    function getAge(e) {
        setAge(e.target.value);
    }

    function setupHome(e) {
        if (!props.sport.length) return;
        if (!age.length || age.includes('-') || !Number(age)) return;
        if (!weight.length || weight.includes('-') || !Number(weight)) return;
        props.setReady((prevState) => {
            localStorage.setItem('isReady', JSON.stringify(true));
            return true;
        });
        const object = {
            sport: props.sport,
            weight: weight,
            age: age
        }
        localStorage.setItem('sportUserData', JSON.stringify(object));
    }

    return (
        <div className="home-setup" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 className="setup-title">Home setup</h1>
            <TextField id="standard-basic" label="Your weight" variant="standard" sx={{marginTop: '30px'}} onChange={getWeight}/>
            <TextField id="standard-basic" label="Your age" variant="standard" sx={{marginTop: '30px'}} onChange={getAge}/>
            <FormControl fullWidth sx={{marginTop: '30px'}}>
                <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.sport}
                    label="Sport"
                    onChange={handleChange}
                >
                    <MenuItem value="Running">Running</MenuItem>
                    <MenuItem value="Boxing">Boxing</MenuItem>
                    <MenuItem value="Football">Football</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" sx={{marginTop: '30px'}} onClick={setupHome}>Set up</Button>
        </div>
    );
}

export default HomeSetUp;