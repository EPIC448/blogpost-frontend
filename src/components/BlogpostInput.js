import React from 'react'
import {connect} from 'react-redux'
import { addBlogpost } from '../actions/addBlogpost'

class BlogpostInput extends React.Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBlogpost(this.state)
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
          <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/><br/>
          <br></br>
                    <label>BlogPost Content:  </label>
          <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/><br/>
          <br></br>
                    <input type="submit" />
        </form>
            </div>
            
        )
    }

}

export default connect(null,{addBlogpost})(BlogpostInput)