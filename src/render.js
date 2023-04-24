import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {addPost,addMessage, updateNewPostText, updateNewMessageText} from "./store/state";
export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateNewMessageText={updateNewMessageText}  />,
        document.getElementById('root')
    );
};
