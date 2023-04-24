import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postItems = props?.posts?.map(item => <Post key={item.id} data={item} />)

    const elNewPostText = React.useRef();
    //
    const addPost = () =>{
        props.addPost()
    }

    const onPostChange = () =>{
        const text = elNewPostText.current.value;
        props.updateNewPostText(text)
    }



    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea ref={elNewPostText} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;