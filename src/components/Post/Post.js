import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <article
            onClick={props.click}
            className="post"
        >
            <h1>{props.title}</h1>
            <p>
                {props.content}
            </p>
            <div>
                <div className="author">
                    نویسنده: {props.author}
                </div>
            </div>
        </article>
    )
}

export default Post;