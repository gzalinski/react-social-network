import React from "react";
import s from "./Users.module.css"

let Users = (props) =>{
    if(props.users.length === 0 ) {
        props.setUsers( [
            {
                id: 1,
                followed: false,
                fullName: "Dmitry K",
                status: "description 1",
                location: { country: 'Moldova', city: 'Kishinev'},
                photoURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            },
            {
                id: 2,
                followed: true,
                fullName: "Svetlana D",
                status: "description 1",
                location: { country: 'Belarus', city: 'Minsk'}
                ,
                photoURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            },
            {
                id: 3,
                followed: false,
                fullName: "Sergei S",
                status: "description 1",
                location: { country: 'Russia', city: 'Moscow'},
                photoURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            },
            {
                id: 4,
                followed: false,
                fullName: "Danil S",
                status: "description 1",
                location: { country: 'Russia', city: 'Moscow'},
                photoURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            },
        ]);
    }



    return <div>{
        props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img className={s.userPhoto} src={user.photoURL} />
                </div>
                <div>
                    {user.followed
                        ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
        </div>)
    }</div>
}

export default Users;