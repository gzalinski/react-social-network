import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


let dataPosts = [
    { id: 1, title: "title 1", description: "description 1"},
    { id: 2, title: "title 2", description: "description 2"},
    { id: 3, title: "title 3", description: "description 3"},
]

const dataDialogs = [
    {"id": 1, "name": "Dimych"},
    {"id": 2, "name": "Andrey"},
    {"id": 3, "name": "Sveta"},
    {"id": 4, "name": "Sasha"},
    {"id": 5, "name": "Viktor"}
]

const dataMessages = [
    {"id": 1, "text": "Hi!"},
    {"id": 2, "text": "How are you ?"},
    {"id": 3, "text": ":)"}
]

root.render(
  <React.StrictMode>
    <App posts={dataPosts} dialogs={dataDialogs} messages={dataMessages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
