import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, title: "title 1", description: "description 1", like: 0},
            { id: 2, title: "title 2", description: "description 2", like: 5},
            { id: 3, title: "title 3", description: "description 3", like: 23},
        ],
        newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
        dialogs: [
            {"id": 1, "name": "Dimych"},
            {"id": 2, "name": "Andrey"},
            {"id": 3, "name": "Sveta"},
            {"id": 4, "name": "Sasha"},
            {"id": 5, "name": "Viktor"}
        ],
        messages: [
            {"id": 1, "text": "Hi!"},
            {"id": 2, "text": "How are you ?"},
            {"id": 3, "text": ":)"}
        ]
    },
    sidebar: {

    }
}

export let addPost = () => {

    const newPost = {
        id: 5,
        description: state.profilePage.newPostText,
        like: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;