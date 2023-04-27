import React from "react";

import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducer-dialogs";
import {connect} from "react-redux";

let mapStateProps = (state) =>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageText: (text) => {
            dispatch( updateNewMessageTextActionCreator(text) )
        },
        addMessage: () => {
            dispatch( addMessageActionCreator() )
        }
    }
}

const DialogsContainer = connect(mapStateProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;