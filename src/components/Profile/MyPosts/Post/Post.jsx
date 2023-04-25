import React from "react";
import s from './Post.module.css'

const Post = ({data}) => {

    return (
        <article key={data.id} className={s.item}>
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{data?.title}</h2>
                <p>{data?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </article>
    );
}

export default Post;