import React from 'react'
import axios from '../../../axios'
import { Link } from 'react-router-dom'
import Post from '../../../components/Post/Post'

import './Posts.css'

class Posts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    console.log(this.props)
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 12)
        const updatedPosts = posts.map((item) => {
          return {
            ...item,
            author: 'آرش یاسمن',
          }
        })
        this.setState({ posts: updatedPosts })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  selectPostHandler = (id) => {
    this.setState({ selectedPostId: id })
  }

  render() {
    let posts = <p className="error">به نظر می‌رسد دسترسی شما به اینترنت با مشکل مواجه شده است!</p>
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          <Link to={`/${item.id}`} key={item.id}>
            <Post
              title={item.title}
              author={item.author}
              click={() => this.selectPostHandler(item.id)}
            />
          </Link>
        )
      })
    }

    return <section className="posts">{posts}</section>
  }
}

export default Posts
