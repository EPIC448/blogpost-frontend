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
            [event.target.title]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '',
            balance: ''
        })
    }

    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <label>BlogPost Title: </label>
          <input type='text' placeholder='Title' value={this.state.title} title="title" onChange={this.handleChange}/><br/>
         
                    <label>BlogPost Title:  </label>
          <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
            </div>
            
        )
    }

}

export default connect(null,{addBlogpost})(BlogpostInput)