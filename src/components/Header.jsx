import React from "react";
import DropdownProfile from "./header/DropdownProfile";
import ButtonNotification from "./header/ButtonNotification";
import HeaderLogo from "./header/HeaderLogo";

const Header = () => {
    return (
        <div className="site__header">
                <div className="navbar">
                    <div className="flex-1">
                        <HeaderLogo/>
                    </div>
                    <div className="flex-none gap-2">
                        <DropdownProfile/>
                        <ButtonNotification/>
                    </div>
                </div>
        </div>
    );
}

export default Header;