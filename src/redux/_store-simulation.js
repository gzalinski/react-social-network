import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";


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


    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action);
        this._state.sidebar = reducerSidebar(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

let _store = new AppStore();

export default _store;

