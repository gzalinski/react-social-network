import React from "react";
import MyPosts from "./MyPosts"

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer-profile";
import {connect} from "react-redux";


let mapStateProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch( addPostActionCreator() )
        }
    }
}

const MyPostsContainer = connect(mapStateProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;