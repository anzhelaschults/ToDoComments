import React, {useState} from "react";

const Form = (props) => {

    const [guestName, setGuestName] = useState('')
    const [guestLastName, setGuestLastName] = useState('')

    const submitHandler = event => {
        event.preventDefault()
        props.saveNewGuest ({
            guestName,
            guestLastName,
        })
        setGuestName('')
        setGuestLastName('')
    }
    // const changeGuestNameHandler = event => {
    //     setGuestName(event.target.value)
    // }

    const changeGuestNameHandler = function (event) {
        setGuestName(event.target.value)
    }
    const changeGuestLastNameHandler = event => {
        setGuestLastName(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter name of the guest"
                value={guestName}
                // onChange={(eventt) => {
                //     setGuestName(eventt.target.value)
                // }}
                onChange={changeGuestNameHandler}
                />
            <input
                type="text"
                className="form-control"
                placeholder="Enter last name of the guest"
                value={guestLastName}
                onChange={changeGuestLastNameHandler}
            />



            <button
                className="btn btn-success btn-sm"
                type="submit"
                >Add New Guest</button>
        </form>
    )
}

export default Form;