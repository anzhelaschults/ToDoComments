import React from 'react'
import Person from "./Person"

const Guestlist = (props) => {

    return !props.guests.length
    ?<div className="alert alert-warning">Guests not added</div>
        : (
            <div className="list-group">
                {props.guests.map(guest =>
                    <Person
                    key={guest.id}
                    guestlist={guest}
                    clickHandler={props.clickHandler} />
                )}
            </div>
        )
}
export default Guestlist;

