import React from 'react'
import {connect} from 'react-redux'
import {editBlogpost} from '../actions/editBlogpost'
// import { throwStatement } from '@babel/types'




class BlogpostEdit extends React.Component {


    state = {
        title: '',
      content: '',
        vote: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        })
    }

  handlesubmit = (event) => {
      
      event.preventDefault()
      
        let newblogpost = { ...this.state, id: this.props.blogpost.id }
        this.props.editBlogpost(newblogpost)
        this.setState({
            title: '',
            content: ''

        })
  }
  
  
      
  handleUpvoteClicked = event => {
    let newVote = this.state.vote + 1

    this.setState({
        vote: newVote
      })
    
    
  };
  downVoteClicked = event => {
    let newVote = this.state.vote - 1

    this.setState({
        vote: newVote
      })
    
    
  };


  render() {
    return (
      <div>
        
        <form onSubmit={this.handlesubmit}>
          <label>Edit BlogPost Title: </label>

          <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/><br/>
          
                <label>Edit BlogPost Content: </label>
          <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/><br/>
          <input type="submit" />
          
          <br>
          </br>

        </form>

        <button onClick={this.handleUpvoteClicked}> <span>Up👍🏿Vote</span></button>
        {this.state.vote}

        <button onClick={this.downVoteClicked}> <span> Down👎🏻vote</span></button>
      </div>
    )
  }
}



BlogpostEdit.defaultProps = {
    blogpost: {}
}
export default connect(null,{editBlogpost})(BlogpostEdit)