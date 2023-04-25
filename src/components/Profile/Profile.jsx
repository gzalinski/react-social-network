import React  from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = ({data, dispatch}) =>{
    return (
    <div>
        <ProfileInfo/>
        <MyPosts data={data} dispatch={dispatch} />
    </div>);
}

export default  Profile;