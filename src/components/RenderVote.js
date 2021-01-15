// eslint-disable-next-line
import React, { Fragment } from 'react'

class Rendervote extends React.Component{
    

    state = {
      vote: 0
    }
    
  
        
    handleUpvoteClicked = event => {
  
      let newVote = this.state.vote + 1     
      
      this.setState({
      
         vote: newVote 
      })
      
      
    };
    
  downVoteClicked = event => {
      
    let newVote = this.state.vote - 1
    
    if (newVote > -1) {
      this.setState({
        
        vote: newVote
      })
     }
  
    };
  
    
    render(){
        return (
          
          <div class="nested-links">


                <button onClick={this.handleUpvoteClicked}> <span>Up👍🏿Vote</span></button>
                 {this.state.vote}
      
                <button onClick={this.downVoteClicked}> <span> Down👎🏻vote</span></button>
      
        
          </div>
      
        )
   }
  }
  
  export default (Rendervote)
  