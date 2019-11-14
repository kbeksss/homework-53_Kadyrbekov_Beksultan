import React from 'react';
import './AddTaskForm.css'
function AddTaskForm(props){
    return (
        <div className='newTask'>
            <input type="text" value={props.val} onChange={props.onChange}/>
            <button onClick={props.onClick}>Add</button>
        </div>
    );
}

export default AddTaskForm;