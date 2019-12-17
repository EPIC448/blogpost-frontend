import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/blog_posts', {
      method: 'GET'

    })
      .then(Response => Response.json())
    .then(data => console.log(data))

  }

  render() {

    return (
      <div className="App">
        App
        
      </div>
    );
    
  }
 
}

export default App;
