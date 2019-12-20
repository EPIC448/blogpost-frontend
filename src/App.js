import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import BlogpostsContainer from './containers/BlogpostsContainer'

class App extends React.Component {
  componentDidMount() {
    // fetch('http://localhost:3000/blog_posts')
    //   .then(resp => resp.json())
    //   .then(blog_posts => dispatch({
    //     type: 'FETCH_BLOGPOSTS',
    //     payload: blog_posts
      
    //   }))
    




    fetch('http://localhost:3000/blog_posts/', {
      method: 'GET'
    })
    
      .then(response => response.json())
    .then(data => console.log(data))
    
  }


  render() {

    return (
      <div className="App">
        <p>This is the App page</p>
        {/* <BlogpostsContainer> */}
        {/* App... This is the App.js */}
        <BlogpostsContainer/>
        
      </div>
    );
    
  }
 
}

export default App;
