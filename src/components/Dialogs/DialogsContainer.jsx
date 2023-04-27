import React from "react";

import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducer-dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (<Dialogs updateNewMessageText={onMessageChange}
                     addMessage={addMessage}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageText}
    />);
}

export default DialogsContainer;