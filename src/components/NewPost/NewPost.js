import axios from 'axios'
import React from 'react'
import './NewPost.css'

class NewPost extends React.Component {
    state = {
        title:'',
        content: '',
        author: 'آرش',
    }

    postDataHandler = () => {
        const data = {
            title: this.props.title,
            body: this.props.content,
            author: this.props.author,
        }
        axios.post('/posts', data)
            .then((response) => {
                console.log(response)
                alert('پست شما با موفقیت ثبت شد.');
            })
    }
    
    render() {
        return (
            <div className="new-post">
                <h2>اضافه کردن یک پست</h2>
                <label>تیتر</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={ (event) => this.setState({ title: event.target.value }) }
                />

                <label>محتوا</label>
                <textarea
                    rows="5"
                    value={this.state.content}
                    onChange={ (event) => this.setState({ content: event.target.value }) }
                />
                
                <label>نویسنده</label>
                <select
                    value={this.state.author}
                    onChange={ (event) => this.setState({ author: event.target.value }) }
                >
                    <option value="آرش">
                        آرش
                    </option>
                </select>
                <button onClick={this.postDataHandler}>اضافه کردن</button>
            </div>
        )
    }
}

export default NewPost;