import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post description='Hi, how are you' title='Title 1'/>
                <Post description='Hi, how are you 2' title='Title 2'/>
                <Post description='Hi, how are you 3' title='Title 3'/>
            </div>
        </div>
    );
}

export default MyPosts;