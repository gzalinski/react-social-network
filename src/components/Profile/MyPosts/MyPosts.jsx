import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postItems = props.posts?.map(item => <Post key={item.id} data={item}/>)

    const newPostElement = React.useRef();

    const onAddPost = () => props.addPost()

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={ onAddPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );

}

export default MyPosts;