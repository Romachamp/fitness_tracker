import React, {useContext, useEffect, useState} from 'react';
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {userContext} from "../../context/userContext";
import {useNavigate} from "react-router";

function LoginPage(props) {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const { isUserExists, setUser} = useContext(userContext);
    const navigate = useNavigate();
    const [res, setRes]= useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function validationCheck(mail, password) {
         if (mail === '') return false;
         if (password === '') return false;
         return true;
    }

    function register() {
        const isValid = validationCheck(mail, password);
        if (isValid) {
            const object = {
                mail: mail,
                password: password
            }
            localStorage.setItem('user', JSON.stringify(object));
            setUser(object);
            setRes('You have been registered');
        } else {
            setRes('You have not entered mail or password');
        }
    }

    function handlePasswordChange(e) {
        setPassword((prevState) => {
            localStorage.setItem('password', e.target.value);
            return e.target.value;
        });
    }

    function handleMailChange(e) {
        setMail((prevState) => {
            localStorage.setItem('mail', e.target.value);
            return e.target.value;
        });
    }

    useEffect(() => {
        if (isUserExists) {
            navigate('/home');
        }
    }, [isUserExists]);



    return (
        <div className="login-page">
            <div className="login-container">
                <TextField id="standard-basic" label="Enter name" variant="standard" sx={{marginTop: '20px'}} onChange={handleMailChange}/>
                <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className="buttons" style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                    <Button variant="contained" sx={{marginTop: '20px'}} onClick={register}>Register</Button>
                </div>
                <h3 className="response">{res}</h3>
            </div>
        </div>
    );
}

export default LoginPage;