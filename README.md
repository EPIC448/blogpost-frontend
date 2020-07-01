


**Project Title**
   BlogPost-Frontend


**Motivation**
   Honestly, The Science part of me fueled this project. As a natural born engineer, I wander what it would be like to add almost identical functionality of Twitter to a blog post, combined with the Upvote and Downvote function of Reddit or anyother apps out there.

   ![](https://media.giphy.com/media/FlF0q8GnGI2cM/giphy.gif)
   
    Simply put, what app do I wish I had when I use web application such as reddit or twitter.
    
     *That answer birth this project.* 
     

**Code_Sample**

   *fetch from the API*

```
    export function fetchBlogposts(){
    return (dispatch) => {
        fetch('http://localhost:3000/blog_posts')
            .then(resp => resp.json())
            .then(blog_posts => dispatch({
                type: 'FETCH_BLOGPOSTS',
                payload: blog_posts
                
            }))
            .catch(error => console.log(error) )
    }
  }

```

*React-redux implementation*

 ```
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
```



**Tech/Framework used**

   *System dependencies*

```
     {
  "name": "blogpost-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "bootstrap": "^4.4.1",
    "react": "^16.12.0",
    "react-bootstrap": "^1.0.0-beta.16",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^3.3.0",
    "redux": "^4.0.4",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
 ```

**Installation**
Installation
   OSX & Linux.
 - In your Github reposiotry. 
 - Fork the project into your      current repository.
 -Then clone is down into your local machine 

    
          *Hint: Make sure to  clone and start the backend section of this project at https://github.com/EPIC448/blogpost-backend   before running npm start for this project. Else, you will have a webpage with no data in it. 
          

  -In your Shell or Local terminal, cd to the approprate file that you just cloned and run or type  
       > Npm start.

*Start up the app in your browser*

npm start   => to start up this app, as this is the front-end section of this project.    
        Hint: Make sure to  clone and start the backend section of this project at https://github.com/EPIC448/blogpost-backend   before running npm start for this project.
     
*Usage Example*


    The project shows a list of comments and The user has the choice to vote on that comments, Edit the comment, or create a New comment.

     ADD SCRRENSHOT
  





**yarn start**

- Runs the app in the development mode.<br />

- Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

- The page will reload  automatically if you make edit
You will also see any lint errors in the console.

**Commiting to Git hub**

[ ]Open the terminal.

[ ]Change the current working directory to your local repository.

[ ]Commit the file that you've staged in your local repository.

[ ] $ git commit -m "Add existing file" Push the changes in your local repository to GitHub.

[ ]$ git push origin branch-name.

**Meta**

Your Name – samuel.O -> samrey2018@gmail.com / https://github.com/epic448

Distributed under the Samuel.O license. See LICENSE for more information.

https://github.com/epic448/github-link



**Learn More**

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).