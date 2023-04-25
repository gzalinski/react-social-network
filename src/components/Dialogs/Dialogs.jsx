import React from "react";
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({data, dispatch}) => {

    // create an array of DialogItem components using the map() method
    let dialogItems = data?.dialogs?.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)
    let messageItems = data?.messages?.map(item => <Message key={item.id} id={item.id} text={item.text} />)

    const elNewMessageText = React.useRef();

    const onMessageChange = () =>{
        const text = elNewMessageText.current.value;
        dispatch({type: 'update-new-message-text', newText: text})
    }

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.messages}>
                    {messageItems}
                </div>
                <div className={s.formAddMessage}>
                    <textarea ref={elNewMessageText} value={ data.newMessageText} onChange={onMessageChange}/>
                    <button className="btn btn-sm btn-primary" onClick={ () => dispatch({type: 'add-message'}) }>Send</button>
                </div>
            </div>
            <div className={s.sidebar}>
                <div className={s.dialogs}>
                    {dialogItems}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;