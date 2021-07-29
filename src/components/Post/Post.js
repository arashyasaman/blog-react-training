import React from 'react'

import './Post.css'

const post = (props) => (
  <article className="post" onClick={props.click}>
    <h1>{props.title}</h1>
    <div className="author">{props.author}</div>
  </article>
)

export default post
