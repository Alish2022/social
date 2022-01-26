import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src='' alt='ava'></img>
    <div className={style.item}>{props.message}</div>
    <div>{props.likes} likes</div>
        </div>
    );
}

export default Post;
