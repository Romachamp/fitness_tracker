import React, {useContext} from 'react';
import {goalsContext} from "../../context/goalsContext";
import GoalItem from "./GoalItem";

function GoalsItems(props) {

    const {goals, setGoals} = useContext(goalsContext);

    function deleteGoal(id) {
        setGoals(prevState => {
            const newItems = prevState.filter(item => item.id !== id);
            localStorage.setItem('goals', JSON.stringify(newItems));
            return newItems;
        });
    }

    return (
        <div className="goals-items">
            {goals.map(goal => <GoalItem value={goal.value} id={goal.id} day={goal.day} key={goal.id} deleteGoal={deleteGoal}/>)}
        </div>
    );
}

export default GoalsItems;