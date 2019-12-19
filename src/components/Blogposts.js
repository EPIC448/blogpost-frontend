import React from 'react'
import {Route, Link} from 'react-router-dom'
import Blogpost from './Blogpost'

const Blogposts = (props) => {
  console.log(props)
  return (
    <div>
      {props.blogposts.map(blogpost =>
        <li key={blogpost.id}>

          <Link to={`/blogposts/${blogpost.id}`}>{blogpost.title} - ${blogpost.content}</Link>
        </li> )}
    </div>

  )
}

export default Blogposts