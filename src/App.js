import React from 'react';

import {connect} from 'react-redux'
import {fetchBlogposts} from './actions/fetchBlogposts'
import BlogpostsContainer from './containers/BlogpostsContainer'
import { Badge } from 'reactstrap';



class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchBlogposts()
  }



  render() {

    return (
      <div className="App">
        <h1> <Badge color="light">Snowed_IN</Badge></h1>
        
        <BlogpostsContainer />
      </div>
    )
    
  }
 
}

// export default App;
export default connect(null, {fetchBlogposts})(App)