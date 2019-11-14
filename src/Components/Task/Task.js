import React from 'react';
import './Task.css';
function Task(props) {
    return(
        <div className='tasks'>
            <p>{props.text}</p>
            <button className='btn-remove' onClick={props.onRemove}><i className="fas fa-trash-alt"/></button>
        </div>
    );
}

export default Task;