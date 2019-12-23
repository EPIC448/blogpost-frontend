import React from 'react'
import {Route, Link} from 'react-router-dom'
import Blogpost from './Blogpost'

const Blogposts = (props) => {
  // debugger
  //  props.blogpost.... is coming in as Undfined...
  //   Look at your pay_load / what your have in your state
  return (
    <div>
      {props.blogposts.map(blogpost =>
        <li key={blogpost.id}>

          <Link to={`/blog_posts/${blogpost.id}`}>{blogpost.title} - {blogpost.content}</Link>
        </li> )}
    </div>

  )
}

export default Blogposts