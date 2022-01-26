import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';

let postData=[
    {message:'Hi,dear friends!', likes:20},
    {message:'Me first post!', likes:25}
]

let post=postData.map(el=><Post message={el.message} likes={el.likes}/>)

const MyPosts = () => {
    return (
        <div>My posts
            <NewPost />
            {post}
        </div>
    );
}

export default MyPosts;
