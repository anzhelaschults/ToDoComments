import React, {useState} from 'react';

/**
 Component form fot user input - tasks (todos)
 */
const TodoForm = (props) => {

    const [todoText, setTodoText] = useState(''); // initial state - empty form


    /**
     * @param event
     * preventDefault prevents all the actions by default
     */
    const submitHandler = event => {
        event.preventDefault();
        props.saveNewTodo( todoText ) //we call saveNewTodo in Main
        setTodoText('');
    }

    const changeTodoTextHandler = event => {
        setTodoText(event.target.value);
    }

    // submitHandler - what happens after submit our form
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter new ToDo Title"
                value={todoText}
                onChange={changeTodoTextHandler}
            />
            <button
                className="btn btn-success btn-sm"
                type="submit"
            >Add New Todo</button>
        </form>
    )
}
/**
 * we export this component and import it in TodoMain
 */
export default TodoForm;