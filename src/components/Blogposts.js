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
  

      
//   handleUpvoteClicked = event => {

    
    

//     let newVote = this.state.vote + 1
//     debugger

//     // This give me just the IDs 
//        let  getVote  = this.props.blogposts.forEach(element => console.log(element.id));  
//     // => 1
//     // 2
//     // VM1875:2 3
//     // VM1875:2 4
//     // VM1875:2 5
//     // VM1875:2 6

//     // function getFreeVote(getVote) {
//     //   return (getVote === element.id ? vote: newVote : null);
//     // }
    
//     this.setState({
    
      

//        vote: newVote 
//     })
    
    
//   };
  
//   downVoteClicked = event => {

//       // blogpost.find(blogpost => this.props.blogpost.id === id)
//     let newVote = this.state.vote - 1
// //  debugger
//     this.setState({
      
//         vote: newVote
//       })
    
    
//   };

  
  render(){
  return (
    
    <div class="nested-links">

      {this.props.blogposts.map(blogpost =>
        <li key={blogpost.id}>

          <Link to={`/blog_posts/${blogpost.id}`}>{blogpost.title} - {blogpost.content}</Link>

          
            
        <RenderVote/>

          {/* <button onClick={this.handleUpvoteClicked}> <span>Up👍🏿Vote</span></button>
        {this.state.vote}

        <button onClick={this.downVoteClicked}> <span> Down👎🏻vote</span></button> */}
          
        </li>)}
    </div>

  )
 }
}

export default connect(null, {})(Blogposts)

//Take home to graduate.
//  makingvoting Unique... .

// send the code snippet to alice  


