import React, { Component } from 'react'
import './src/css/main.css'
import Result from './Result'
import NewGame from './ResetButton'
import Tile from './sketch';
import Robot from './src/img/robot.svg'
import Human from './src/img/human.svg'
export default class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {
          gameBoard: [
              ' ',' ',' ',
              ' ',' ',' ',
              ' ',' ',' '
          ],
          winner: null,
          turn: 'x'
        }
      }
  
      resetBoard(){
        this.setState({
          gameBoard: [
            ' ',' ',' ',
            ' ',' ',' ',
            ' ',' ',' '   
          ],
          winner: null,
          turn: 'x'
        });
      }


      updateBoard(loc, player) {
          //Game Over!
      console.log(this.state.winner, this.state.turn, this.state.gameBoard);
      if(this.state.winner !== null) {
        //make game over component visible
        console.log("Winner", this.state.winner);
        return;
      }
      if(this.state.gameBoard[loc]=== 'x' || this.state.gameBoard[loc]=== 'o'){
        //invalid move
        return;
      }
      let currentGameBoard = this.state.gameBoard;
      currentGameBoard.splice(loc, 1, this.state.turn);
      this.setState({gameBoard: currentGameBoard}, function(){
        //Check if there is a winner or draw
        var moves = this.state.gameBoard.join('').replace(/ /g,'');
        console.log('Moves:', moves, 'Winner:', this.state.winner);
        if(moves.length === 9) {
          this.setState({winner: 'd'});
          //Make game over component visible
          return;
        } else {
          var topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
          if(topRow.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
            }
          var middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
          if(middleRow.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
          if(bottomRow.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
          if(leftCol.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
          if(middleCol.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
          if(rightCol.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
          if(leftDiag.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          var rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
          if(rightDiag.match(/xxx|ooo/)){
            this.setState({winner: this.state.turn});
            return;
          }
          this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x' });
        }
      }, this);
       
      }

    render() {
        return(
            <div className="container">
                <div className="instructionDiv">
                    <div>
                    <NewGame reset={this.resetBoard.bind(this)} />
                    </div>
                    <h1> hints/instruction</h1>

                </div>

                <div className="gameDiv">
                <div className="resultShow">
                    <Result winner={this.state.winner} />
                    </div>

                    <h1> Tic Tac Toe</h1>
                    <div className="gameBox">
                    {this.state.gameBoard.map(function(value, i){
                        return(
                        <Tile 
                            key={i}
                            loc={i}
                            value={value}
                            updateBoard={this.updateBoard.bind(this)}
                            turn={this.state.turn} />
                        );
                        }.bind(this))}
                    </div>
                </div>

                <div className="playresouterDiv">
                    <div className="players">
                    <div className="robotDiv">
                        <img src={Robot} /><p>Computer/AI</p>
                    </div>
                    <h1>Vs</h1>
                    <div className="humanDiv"> 
                        <img src={Human} /><p>Player/Human</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}