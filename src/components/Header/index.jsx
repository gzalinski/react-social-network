import React from "react";
import DropdownProfile from "./DropdownProfile";
import ButtonNotification from "./ButtonNotification";
import HeaderLogo from "./HeaderLogo";

const Index = () => {
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

export default Index;