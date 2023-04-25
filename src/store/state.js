class AppStore {
    constructor() {
        this._subscriber = () => {
            console.log('no subscribers (observers)');
        };

        this._state = {
            profilePage: {
                posts: [
                    {id: 1, title: "title 1", description: "description 1", like: 0},
                    {id: 2, title: "title 2", description: "description 2", like: 5},
                    {id: 3, title: "title 3", description: "description 3", like: 23},
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
            sidebar: {}
        };
    }

    rerenderEntireTree(state) {
        console.log('State changed')
    }

    getState() {
        return this._state;
    }

    getProfilePage() {
        return this._state.profilePage;
    }

    getDialogsPage() {
        return this._state.dialogsPage;
    }

    setState(newStore) {
        this._state = newStore;
    }

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }

    addPost() {
        const newPost = {
            id: 5,
            description: this._state.profilePage.newPostText,
            like: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state);
    }

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    }

    addMessage() {
        const newMessage = {
            id: 5,
            text: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.rerenderEntireTree(this._state);
    }

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this.rerenderEntireTree(this.getState());
    }
}

let Store = new AppStore();

export default Store;