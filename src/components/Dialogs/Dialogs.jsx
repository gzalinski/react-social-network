import React from "react";
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dataDialogs = [
        {"id": 1, "name": "Dimych"},
        {"id": 2, "name": "Andrey"},
        {"id": 3, "name": "Sveta"},
        {"id": 4, "name": "Sasha"},
        {"id": 5, "name": "Viktor"}
    ]

    const dataMessages = [
        {"id": 1, "text": "Hi!"},
        {"id": 2, "text": "How are you ?"},
        {"id": 3, "text": ":)"}
    ]

    // create an array of DialogItem components using the map() method
    let dialogItems = dataDialogs.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)
    let messageItems = dataMessages.map(item => <Message text={item.text} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    );
}

export default Dialogs;