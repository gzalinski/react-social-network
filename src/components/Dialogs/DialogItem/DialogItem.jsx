import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={ s.dialog + ' btn btn-ghost'}>
            <div className={s.dialogAvatar}>
                <img  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=""/>
            </div>
            <span className={s.dialogName}>{props.name}</span>
        </NavLink>
    );
}

export default DialogItem;