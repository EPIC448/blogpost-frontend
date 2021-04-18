// eslint-disable-next-line
import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import RenderVote from './RenderVote'

import {connect} from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';


class Blogposts extends React.Component{
    

  state = {
    title: '',
  content: '',
  
  }
  

  
  render(){
  return (
    
    <div class="nested-links">

      {this.props.blogposts.map(blogpost =>
        <li key={blogpost.id}>

          <NavLink to={`/blog_posts/${blogpost.id}`}>{blogpost.title} - {blogpost.content}</NavLink>

          
            
        <RenderVote/>

          
          
        </li>)}
    </div>

  )
 }
}

export default connect(null, {})(Blogposts)



