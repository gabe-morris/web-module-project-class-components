import React from 'react'

const Todo = props => {
    const handleClick = () => {
        props.handleCompleted(props.item.id)
    }

    return(

        <div onClick={handleClick} className ={`item ${props.item.completed ? 'purchased' : ''}`}>
           <p>{props.item.name}</p>


        </div>
    )
}

export default Todo;