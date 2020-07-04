import React, { Component } from 'react';
import './src/css/result.css'
export default class Result extends Component {

  render(){
    return(
      <>
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Game Over</h2>
        <h2>{this.props.winner} is the winner. </h2>  
      </div>
      {/* <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Tie</h2>
        </div> */}
     </>
    )
  }
}