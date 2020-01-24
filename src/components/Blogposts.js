import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import RenderVote from './RenderVote'

// import { ReactReduxContext } from 'react-redux'
import {connect} from 'react-redux'

// const Blogposts = (props) => {

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

          <Link to={`/blog_posts/${blogpost.id}`}>{blogpost.title} - {blogpost.content}</Link>

          
            
        <RenderVote/>

          
          
        </li>)}
    </div>

  )
 }
}

export default connect(null, {})(Blogposts)

//Take home to graduate.
//  makingvoting Unique... .

// send the code snippet to alice  


