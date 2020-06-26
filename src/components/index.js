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
          turn: 'x',
          winner: null,
          maxPlayer : "x",
          minPlayer : 'o'
        }
      }
  
      resetBoard(){
        this.setState({
          gameBoard: [
            ' ',' ',' ',
            ' ',' ',' ',
            ' ',' ',' '   
          ],
          turn: 'x',
          winner: null,
          maxPlayer : "x",
          minPlayer : 'o'
        });
      }

      winner(board, player) {
        if (
          (board[0] === player && board[1] === player && board[2] === player) ||
          (board[3] === player && board[4] === player && board[5] === player) ||
          (board[6] === player && board[7] === player && board[8] === player) ||
          (board[0] === player && board[3] === player && board[6] === player) ||
          (board[1] === player && board[4] === player && board[7] === player) ||
          (board[2] === player && board[5] === player && board[8] === player) ||
          (board[0] === player && board[4] === player && board[8] === player) ||
          (board[2] === player && board[4] === player && board[6] === player)
          ) {
          return true;
      } else {
          return null;
      }

      }

      copyBoard(board) {
        return board.slice(0);
      }


      tie(board) {
        var moves = board.join('').replace(/ /g, '');
        if (moves.length === 9) {
          return true;
        }
        return false;
      }

      validMove(move, player, board){
        var newBoard = this.copyBoard(board);
        if(newBoard[move] === ' '){
          newBoard[move] = player;
          return newBoard;
        } else
          return null;
      }

      findAiMove(board) {
        var bestMoveScore = 100;
        let move = null;
        if(this.winner(board, 'x') || this.winner(board, 'o' || this.tie(board))) {
          return null;
        }
        for(var i = 0; i < board.length; i++){
          let newBoard = this.validMove(i, this.state.minPlayer, board);
          if(newBoard) {
            var moveScore =this.maxScore(newBoard);
            if (moveScore < bestMoveScore) {
              bestMoveScore = moveScore;
              move = i;
            }
          }
        }
        return move;
      }

      minScore(board) {
        if (this.winner(board, 'x')) {
          return 10;
        } else if (this.winner(board, 'o')) {
          return -10;
        } else if (this.tie(board)) {
          return 0;
        } else {
          var bestMoveValue = 100;
          let move = 0;
          for (var i = 0; i < board.length; i++) {
            var newBoard = this.validMove(i, this.state.minPlayer, board);
            if (newBoard) {
              var predictedMoveValue =this.maxScore(newBoard);
              if (predictedMoveValue < bestMoveValue) {
                bestMoveValue = predictedMoveValue;
                move = i;
              }
            }
          }
          return bestMoveValue;
        }
      }

      gameLoop(move){
        let player = this.state.turn;
        let currentGameBoard = this.validMove(move, player, this.state.gameBoard);
        if(this.winner(currentGameBoard, player)){
          this.setState({
            gameBoard: currentGameBoard,
            winner: player
          });
          return;
        }
        if(this.tie(currentGameBoard)){
          this.setState({
            gameBoard: currentGameBoard,
            winner: 'd'
          });
          return;
        }
        player = 'O';
        currentGameBoard = this.validMove(this.findAiMove(currentGameBoard), player, currentGameBoard);
        if(this.winner(currentGameBoard, player)){
          this.setState({
            gameBoard: currentGameBoard,
            winner: player
          });
          return this.player;
        }
        if(this.tie(currentGameBoard)){
          this.setState({
            gameBoard: currentGameBoard,
            winner: 'd'
          });
          return;
        }
        this.setState({
          gameBoard: currentGameBoard
        });

      }
      
      maxScore(board) {
         if(this.winner(board, 'x')) {
          return 10;
        } else if(this.winner(board, 'o')) {
          return -10;
        } else if(this.tie(board)) {
          return 0;
        } else {
          var bestMoveValue = -100;
          let move = 0;
          for (var i = 0; i < board.length; i++) {
            var newBoard = this.validMove(i, this.state.maxPlayer, board);
            if (newBoard) {
              var predictedMoveValue = this.minScore(newBoard);
              if (predictedMoveValue > bestMoveValue) {
                bestMoveValue = predictedMoveValue;
                move = i;
              }
            }
          }
          return bestMoveValue;
        }
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
                            gameLoop={this.gameLoop.bind(this)}
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