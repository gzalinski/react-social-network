import React from "react";
import s from './menu.module.css'
import {NavLink} from "react-router-dom";


//({isActive}) => isActive ? s.active : ''
const Menu = (props) => {

    const addClassActive = ({isActive}) => {
        return isActive ? s.active : '';
    }

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/profile" className={addClassActive}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" className={addClassActive}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={addClassActive}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={addClassActive}> News </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={addClassActive}> Music </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={addClassActive}> Settings </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;