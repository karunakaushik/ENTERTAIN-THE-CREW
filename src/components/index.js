import React, { Component } from 'react'
import './src/css/main.css'
// import Minimax from './minimax'
// import Sketch from './sketch'
export default class MainPage extends Component{
    render() {
        return(
            <div className="container">
                 {/* <script src={Minimax} />
                 <script src={Sketch} /> */}
                 <div>
                     hints/instruction
                 </div>

                 <div>
                     Tic Tac Toe
                 </div>

                 <div>
                     human and computer
                 </div>
            </div>
        )
    }
}