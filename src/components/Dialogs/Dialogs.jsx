import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id} className={s.dialog}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Valera"/>
                <DialogItem id="3" name="Andrey"/>
                <DialogItem id="4" name="Sveta"/>
                <DialogItem id="5" name="Sasha"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi" />
                <Message text="How are you ?" />
                <Message text=":)" />
            </div>
        </div>
    );
}

export default Dialogs;