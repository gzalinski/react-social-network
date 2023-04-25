import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = ({data, dispatch}) => {

    let postItems = data.posts?.map(item => <Post key={item.id} data={item}/>)

    const elNewPostText = React.useRef();

    const onPostChange = () => {
        const text = elNewPostText.current.value;
        dispatch({type: 'update-new-post-text', newText: text})
    }

    return (
        <div>
            My posts
            <div>
                <h3>New post</h3>
                <textarea ref={elNewPostText} value={data.newPostText} onChange={onPostChange}/>
                <button onClick={ () => dispatch({type: 'add-post'}) }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;