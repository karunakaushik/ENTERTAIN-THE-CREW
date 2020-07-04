import React, { Component } from 'react';
import './src/css/result.css'
export default class Result extends Component {

  render(){
    return(
      <>
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Game Over</h2>
        <h2>Player {this.props.winner} is the winner. </h2>  
      </div>
       
     </>
    )
  }
}