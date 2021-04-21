import React from 'react';
import {connect} from 'react-redux'
import {fetchBlogposts} from './actions/fetchBlogposts'
import BlogpostsContainer from './containers/BlogpostsContainer'
import './App.css';




class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchBlogposts()
  }



  render() {

    return (

      <div className="App">
        
      <video autoplay muted loop id="myVideo">
         <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
      </video>
      
      <div class="content_container">
            <h1 class="display-3">Snowed_IN</h1>
            <p class="lead mb-0"> All things Cold Weather</p>
        <BlogpostsContainer />
      </div>
      

      </div>
    );
    
  }
 
}

// export default App;
export default connect(null, {fetchBlogposts})(App)