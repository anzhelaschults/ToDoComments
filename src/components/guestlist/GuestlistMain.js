/**
 * По образу и подобию приложения ToDo
 Создать список приглашенных гостей.
 Добавить Отметку "Пришлашен" по клику на гостя в списке

 Задание ***
 Форма заполнения гостя должна содержать не менее двух полей (Например: Фамилия, Имя, телефон)
 Все заполненные данные должны отображаться в списке.
 */

import React, {useState} from 'react'
// import Person from "./Person"
import Form from "./Form"
import Guestlist from "./Guestlist"

const guestsInit = [

]

const GuestlistMain = () => {
    const [guests, setGuests] = useState(guestsInit)

    const addGuest = guestText => {
        setGuests(guests => [...guests, {id: Date.now(), name: guestText,completed: false}])
    }

    const changeGuestsCompleted = guestId => {

        setGuests(guests.map(guest => {
            if (guest.id === guestId) {
                return {...guest, completed: !guest.completed}
            }
            return guest
            }))
    }

    return (
        <div className="row">
            <div className="col">
                <Form saveNewGuest={addGuest}/>
            </div>
            <div className="col">
                <Guestlist
                clickHandler={changeGuestsCompleted}
                guests={guests}
                />
            </div>
        </div>
    )
}
export default GuestlistMain

