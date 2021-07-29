import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPost.css'

class NewPost extends React.Component {
  state = {
    title: '',
    content: '',
    author: 'آرش یاسمن',
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
      redirect: false
    }
    axios
      .post('https://jsonplaceholder.ir/posts', data)
      .then((response) => {
        console.log(response)
        alert('با موفقیت ثبت شد')
        this.setState({ redirect: true })
      })
  }

  render() {
    let redirect = null

    if(this.state.redirect) {
      redirect = <Redirect to="/" />
    }

    return (
      <div className="new-post">
        {redirect}
        <h2>اضافه کردن پست جدید</h2>
        <label>تیتر</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>محتوا</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>نویسنده</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="آرش یاسمن">آرش یاسمن</option>
        </select>
        <button onClick={this.postDataHandler}>افزودن</button>
      </div>
    )
  }
}

export default NewPost
