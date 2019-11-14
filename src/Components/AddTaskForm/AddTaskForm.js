import React from 'react';
import './AddTaskForm.css'
function AddTaskForm(props){
    return (
        <div className='newTask'>
            <input type="text" value={props.val} onChange={props.onChange}/>
            <button onClick={props.onClick}><i className="fab fa-telegram-plane"/></button>
        </div>
    );
}

export default AddTaskForm;