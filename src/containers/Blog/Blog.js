import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import NotFound from '../../components/NotFound/NotFound'

import './Blog.css'

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/new-post',
                  search: '?sort=post'
                }}>افزودن پست جدید</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Blog
