const ADD_MESSAGE = 'add-message';
const UPDATE_NEW_MESSAGE_TEXT = 'update-new-message-text';

const initialState = {
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
}

const reducerDialogs = (state = initialState, action) => {
    let stateCopy = {...state}


    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                text: state.newMessageText
            }

            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:

            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export default reducerDialogs;


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})