import React from "react";
import s from './Message.module.css'
const Message = (props) => {
    console.log(props)

    return (
        <div className={`${s.message} chat chat-start chat-start`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                </div>
            </div>
            <div className="chat-bubble">  {props.text}</div>
        </div>
    );
}


export default Message;