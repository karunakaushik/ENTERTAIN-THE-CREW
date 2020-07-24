import React, { Component } from 'react'
import Popup from './hintspopup';
import './src/css/hints.css'


export default class Hints1 extends Component{
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
                <button className="hintButton" onClick={this.togglePopup.bind(this)}>HINTS</button>
       
        
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