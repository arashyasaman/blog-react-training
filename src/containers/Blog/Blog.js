import React from 'react'
import axios from 'axios'
import './Blog.css'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import FullPost from '../../components/FullPost/FullPost'

class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    selectedPostIdHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 5)
            const updatedPosts = posts.map((item) => {
                return {
                    ...item,
                    author: 'آرش یاسمن'
                }
            })
            this.setState({ posts: updatedPosts })
        })
        .catch((err) => {
            this.setState({ error: true })
        })
    }

    render() {
        let posts = <p className="error">به نظر می‌رسد دسترسی شما به اینترنت با مشکل مواجه شده است!</p>
        if(!this.state.error) {
            posts = this.state.posts.map((item) => {
                return <Post
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    click={() => {this.selectedPostIdHandler(item.id)}}
                />
            })
        }
        return(
            <div>
                <h1 className="title">بلاگ آرش یاسمن</h1>
                <div className="posts">
                    {posts}
                </div>
                <div>
                    <FullPost id={this.state.selectedPostId} />
                </div>
                <div>
                    <NewPost/>
                </div>
            </div>
        )
    }
}

export default Blog;