import axios from 'axios'
import React from 'react'
import './FullPost.css'

class FullPost extends React.Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(
                !this.state.loadedPost ||
                (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
            )
            axios.get(`/posts/${this.props.id}`)
            .then((response) => {
                this.setState({ loadedPost: response.data })
            })
        }
    }

    

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
        .then((response) => {
            console.log(response)
            alert('پست شما با موفقیت ثبت شد.');
        })
    }


    render() {
        let post = <p className="full-post">لطفا یک پست انتخاب کنید</p>
        
        // if(this.props.id) {
        //     post = <p className="full-post">لطفات کمی صبر کنید</p>
        // }
        
        if(this.state.loadedPost) {
            post = (
                <div className="full-post">
                     <h2>{this.state.loadedPost.title}</h2>
                    <p>{this.state.loadedPost.body}</p>
                    <div>
                        <button
                            className="delete"
                            onClick={this.deletePostHandler}
                        >
                            حذف پست
                        </button>
                    </div>
                </div>
            )
        }
        
        return post
    }
}

export default FullPost;