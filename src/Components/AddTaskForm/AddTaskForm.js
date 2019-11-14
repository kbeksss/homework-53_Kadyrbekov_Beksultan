import React from 'react';
import './AddTaskForm.css'
function AddTaskForm(props){
    return (
        <form action="#" className='myForm'>
            <input type="text" value={props.val} onChange={props.onChange}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddTaskForm;