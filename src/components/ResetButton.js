import React, { Component } from 'react'
import './src/css/reset.css'
export default class NewGame extends Component{
    render() {
        return(
            <div className="resetDiv">
                <button className="newgameButton" onClick={this.props.reset}>New Game</button>
            </div>
        )
    }
}