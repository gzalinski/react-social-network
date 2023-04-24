import React  from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({data,addPost}) =>{
    return (
    <div>
        <ProfileInfo/>
        <MyPosts posts={data.posts} addPost={addPost} />
    </div>);
}

export default  Profile;