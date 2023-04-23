import React from "react";
import s from './menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/profile"  className={ ({isActive}) => isActive && s.active } >Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={ ({isActive}) => isActive && s.active }>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={ ({isActive}) => isActive && s.active } > News </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={ ({isActive}) => isActive && s.active } > Music </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={ ({isActive}) => isActive && s.active } > Settings </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;