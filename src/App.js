import React from 'react';

import {connect} from 'react-redux'
import {fetchBlogposts} from './actions/fetchBlogposts'
import BlogpostsContainer from './containers/BlogpostsContainer'
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchBlogposts()
  }



  render() {

    return (
      <div className="App">
        <p>Welcome to BlogPost Main Page</p>
        {/* <BlogpostsContainer> */}
        {/* App... This is the App.js */}

        <BlogpostsContainer />
        
        
      </div>
    );
    
  }
 
}

// export default App;
export default connect(null, {fetchBlogposts})(App)