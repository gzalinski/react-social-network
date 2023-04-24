import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./store/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById('root')
    );
};
