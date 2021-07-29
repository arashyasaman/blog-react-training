import React from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends React.Component {
  state = {
    loadedPost: null,
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)
      )
        axios
          .get(`https://jsonplaceholder.ir/posts/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({ loadedPost: response.data })
          })
    }
  }

  deletePostHandler = () => {
    axios
      .delete(`https://jsonplaceholder.ir/posts/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    let post = <p className="notice">لطفا یک پست انتخاب کنید</p>
    if (this.props.match.params.id) {
      post = <p className="notice">لطفا کمی صبر کنید</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="full-post">
          <h2>{this.state.loadedPost.title}</h2>
          <p>{this.state.loadedPost.body}</p>
          <div>
            <button onClick={this.deletePostHandler} className="delete">
              حذف
            </button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
