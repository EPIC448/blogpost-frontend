import React from 'react'
import {connect} from 'react-redux'
import {editBlogpost} from '../actions/editBlogpost'
// import { throwStatement } from '@babel/types'


class BlogpostEdit extends React.Component {


    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.title]: event.target.value

        })
    }

    handlesubmit = (event) => {
        event.preventdefault()
        let newblogpost = { ...this.state, id: this.props.blogpost.id }
        this.props.editBlogpost(newblogpost)
        this.setState({
            title: '',
            content: ''

        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>BlogPost Title: </label>
          <input type='text' placeholder='Title' value={this.state.title} title="title" onChange={this.handleChange}/><br/>
          
                <label>BlogPost Content: </label>
          <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}



BlogpostEdit.defaultProps = {
    accounts: {}
}
export default connect(null,{editBlogpost})(BlogpostEdit)