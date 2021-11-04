import React from 'react';

/**
 * Our Item (todo), we take styles from Bootstrap
 * returns div list-group-item that {if task completed - true, highlight task with red warning, else - nothing (empty)}
 */
const TodoItem = (props) => {

    return (
        <div
            className={`list-group-item ${props.todo.completed ? 'list-group-item-danger text-decoration-line-through' : ''}`}
            onClick={() => { props.clickHandler(props.todo.id) }}
        >{props.todo.title}</div>
    )

}
/**
 * we export this component and import it in TodoMain
 */

export default TodoItem;