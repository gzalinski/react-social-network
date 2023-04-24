import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postItems = props?.posts?.map(item => <Post title={item.title} description={item.description} />)

    const elNewPostText = React.useRef();
    //
    const addPost = () =>{
      const text = elNewPostText.current.value;
        props.addPost(text)
    }

    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea ref={elNewPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;