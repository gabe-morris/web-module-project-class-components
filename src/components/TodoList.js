import React from 'react'
import Todo from './Todo'
const TodoList = props => {
    const handleClick = () => {
        props.handleClear();
    }

return(
    <div className='todo-list'>
        {props.tasks.map(item => (
            <Todo handleCompleted={props.handleCompleted} key={item.id} item={item}/>
        ))}
        <button onClick={handleClick} className='clear-btn'>
            Clear Completed
        </button>


    </div>


)
}
export default TodoList;