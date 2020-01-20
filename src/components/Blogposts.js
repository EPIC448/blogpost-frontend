import React from 'react'
import {Route, Link} from 'react-router-dom'
import Blogpost from './Blogpost'


const Blogposts = (props) => {


  
  return (
    
    <div class="nested-links">
      {props.blogposts.map(blogpost =>
        <li key={blogpost.id}>

          <Link to={`/blog_posts/${blogpost.id}`}>{blogpost.title} - {blogpost.content}</Link>


          
        </li> )}
    </div>

  )
}

export default Blogposts