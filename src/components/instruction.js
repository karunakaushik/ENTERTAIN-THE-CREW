import React, { Component } from 'react'
import Popup from './instructionpopup';
import './src/css/hints.css'


export default class Inst extends Component{
    constructor() {
        super();
        this.state = {
          showPopup: false,
          header:"Welcome"
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    render() {
        return (
            <div>
                <button className="instButton" onClick={this.togglePopup.bind(this)}>INSTRUCTION</button>
       
        
       {this.state.showPopup ? 
         <Popup
           text='Popup window text'
           refreshPage={this.togglePopup.bind(this)}
         />
         : null
       }
            </div>
        )
    }
}