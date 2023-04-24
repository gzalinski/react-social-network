import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = ({posts = []}) => {

    let postItems = posts.map(item => <Post title={item.title} description={item.description} />)

    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;