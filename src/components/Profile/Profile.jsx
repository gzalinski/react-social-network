import React  from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({data, addPost, updateNewPostText}) =>{

    return (
    <div>
        <ProfileInfo/>
        <MyPosts
            posts={data.posts}
            newPostText={data.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    </div>);
}

export default  Profile;