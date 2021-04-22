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

        <div className="logo-main">
            <img src="https://images-platform.99static.com//JtU1TCib6mSwjdlOmc68d31hy_Q=/171x864:988x1681/fit-in/590x590/projects-files/60/6081/608172/03cf1f79-fd75-489d-8bc3-fb00cfb16866.jpg"/>
        </div>


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