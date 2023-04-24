let rerenderEntireTree = (state) =>{
    console.log('State changed')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, title: "title 1", description: "description 1", like: 0},
            { id: 2, title: "title 2", description: "description 2", like: 5},
            { id: 3, title: "title 3", description: "description 3", like: 23},
        ],
        newPostText: ""
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
        ],
        newMessageText: ""
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
    state.profilePage.newPostText  = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {

    const newMessage = {
        id: 5,
        text: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText  = ''
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) =>{
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;