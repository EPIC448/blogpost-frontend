import React from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux'
import {fetchBlogposts} from './actions/fetchBlogposts'
import BlogpostsContainer from './containers/BlogpostsContainer'

class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchBlogposts()
  }


  

  //   fetch('http://localhost:3000/blog_posts/', {
  //     method: 'GET'
  //   })
    
  //     .then(response => response.json())
  //   .then(data => console.log(data))
    
  // }


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

// export default App;
export default connect(null, {fetchBlogposts})(App)