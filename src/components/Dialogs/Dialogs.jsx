import React from "react";
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({data}) => {

    // create an array of DialogItem components using the map() method
    let dialogItems = data?.dialogs?.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)
    let messageItems = data?.messages?.map(item => <Message text={item.text} />)

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