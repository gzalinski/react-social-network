const ADD_POST = 'add-post';
const UPDATE_NEW_POST_TEXT = 'update-new-post-text';

const initialState =  {
    posts: [
        {id: 1, title: "title 1", description: "description 1", like: 0},
        {id: 2, title: "title 2", description: "description 2", like: 5},
        {id: 3, title: "title 3", description: "description 3", like: 23},
    ],
    newPostText: ""
}
const reducerProfile = (state = initialState, action) => {
    let stateCopy = {...state}

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                description: state.newPostText,
                like: 0
            }


            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;

    }
}

export default reducerProfile;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})