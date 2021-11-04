import React from 'react'

const Person = (props) => {
console.log('person props', props)
    return (

        <div
            className={`list-group-item ${props.guestlist.completed ? 'list-group-item-success text-decoration-underline': ''}`}
            onClick={() => {props.clickHandler(props.guestlist.id)}}
                >{props.guestlist.name.guestName} {props.guestlist.name.guestLastName} </div>
                )
}
    export default Person