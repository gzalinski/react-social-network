const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'set-users';

const initialState =  {
    users: []
}

const reducerUsers = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u )
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;

    }
}

export default reducerUsers;

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})