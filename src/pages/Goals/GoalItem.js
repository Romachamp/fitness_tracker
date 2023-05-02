import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import {pink} from '@mui/material/colors';

function GoalItem(props) {
    return (
        <div className="goal-item" id={props.id}>
            <div className="goal-content">
                <h1 className="goal-text">{props.value}</h1>
                <h3 className="goal-day">{props.day}</h3>
            </div>
            <IconButton aria-label="Example" onClick={(e) => props.deleteGoal(props.id)}>
                <DeleteIcon sx={{color: pink[500], fontSize: '30px'}}/>
            </IconButton>
        </div>
    );
}

export default GoalItem;