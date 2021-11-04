import React from 'react';
import TodoItem from "./TodoItem";

/*
Props = properties
 */
const TodoList = (props) => {

    /**
     * ? we return array of tasks
     * : if there is no tasks -  we return No Records
     * else - returns todo item (task)
     */
    return !props.todos.length
        ? <div className="alert alert-warning">No Records</div>
        : (
            <div className="list-group">
                {props.todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        clickHandler={props.clickHandler}
                    />)}
            </div>
        )
}
/**
 * we export this component and import it in TodoMain
 */
export default TodoList;