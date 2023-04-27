import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    // create an array of DialogItem components using the map() method
    let dialogItems = props.dialogs?.map(item => <DialogItem key={item.id} id={item.id} name={item.name} />)
    let messageItems = props.messages?.map(item => <Message key={item.id} id={item.id} text={item.text} />)

    const elNewMessageText = React.useRef();

    const onMessageChange = () =>{
        const text = elNewMessageText.current.value;
        props.updateNewMessageText(text)
    }
    const onAddMessage = () => props.addMessage()

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.messages}>
                    {messageItems}
                </div>
                <div className={s.formAddMessage}>
                    <textarea ref={elNewMessageText} value={ props.newMessageText} onChange={onMessageChange}/>
                    <button className="btn btn-sm btn-primary" onClick={ onAddMessage }>Send</button>
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