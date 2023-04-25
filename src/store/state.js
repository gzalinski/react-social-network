class AppStore {
    constructor() {
        this._callSubscriber = () => {
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
        this._callSubscriber = observer;
    }

    _addPost() {
        const newPost = {
            id: 5,
            description: this._state.profilePage.newPostText,
            like: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    }
    _addMessage() {
        const newMessage = {
            id: 5,
            text: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state);
    }

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }

    _updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    }

    dispatch(action){
        switch (action?.type){
            case "add-post":
                this._addPost()
            break;
            case "add-message":
                this._addMessage()
                break;
            case "update-new-post-text":
                this._updateNewPostText(action.newText)
            break;
            case "update-new-message-text":
                this._updateNewMessageText(action.newText)
            break;
        }
    }
}

let Store = new AppStore();

export default Store;