import React from 'react';
import './Task.css';
function Task(props) {
    return(
        <div className='tasks'>
            <p>{props.text}</p>
            <button className='btn-remove'>{props.value}</button>
        </div>
    );
}

export default Task;