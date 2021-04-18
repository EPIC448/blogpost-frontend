// eslint-disable-next-line
import React, { Fragment } from 'react'
import { Button } from 'reactstrap';

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


                <Button onClick={this.handleUpvoteClicked} outline color="success"> <span>Up👍🏿Vote</span> </Button>
                
                 {this.state.vote}
      
                <Button onClick={this.downVoteClicked} outline color="warning" > <span> Down👎🏻vote</span> </Button>
      
        
          </div>
      
        )
   }
  }
  
  export default (Rendervote)
  