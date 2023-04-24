import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let dataPosts = [
        { id: 1, title: "title 1", description: "description 1"},
        { id: 2, title: "title 2", description: "description 2"},
        { id: 3, title: "title 3", description: "description 3"},
    ]

    let postItems = dataPosts.map(item => <Post title={item.title} description={item.description} />)

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