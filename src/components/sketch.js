import React, { Component } from 'react'
import './src/css/sketch.css'
export default class Tile extends Component{

    tileClick(props) {
        props.gameLoop(props.loc, props.turn);
      } 
    render() {
        return(
            <div className={"tileDiv " + this.props.loc} onClick={() => this.tileClick(this.props)}>
            <p>{this.props.value}</p>
            </div>
        )
    }
}