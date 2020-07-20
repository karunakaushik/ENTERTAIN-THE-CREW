import React, { Component } from 'react';
import {
    TYPES_OF_GAME, PLAYER_TURNS,
    winningState, getRandom, replace,
  findBestMove, findRandomMove
} from './minimax';

const THINKING_TIME = 1000;

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  initState = {
    gameType: TYPES_OF_GAME.HUMAN_PLAYERS,
    currentIcon: getRandom(0, 2),
    playerTurn: getRandom(0, 2),
    cells: new Array(9).fill(null),
    gameState: {
      position: "",
      iconType: null,
      isTie: null,
    },
  }

  state = {
    gameType: this.initState.gameType,
    currentIcon: this.initState.currentIcon,
    playerTurn: this.initState.playerTurn,
    cells: this.initState.cells,
    gameState: this.initState.gameState,

    changeType: (type) => {
      if (this.state.gameType !== type) {
        this.initNewGame(type);
      }
    },
    humanPlay: (index) => {
      this.humanPlay(index)
    },
    newGame: () => {
      this.initNewGame(this.state.gameType);
    }
  }

  initGame = () => {
    if (this.state.gameType === TYPES_OF_GAME.VS_COMPUTER &&
      this.state.playerTurn === PLAYER_TURNS.COMPUTER) {

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        const randomMove = findRandomMove(this.state.cells);
        this.computerPlay(randomMove);
      }, THINKING_TIME);
    }
  }

  initNewGame = (type = this.initState.gameType) => {
    this.setState(() => {
      return {
        gameType: type,
        currentIcon: getRandom(0, 2),
        playerTurn: getRandom(0, 2),
        cells: this.initState.cells,
        gameState: this.initState.gameState,
      }
    }, () => {
      this.initGame();
    });
  }

  applyState = (prevState, index) => {
    const cells = prevState.cells;
    const nextIcon = 1 - prevState.currentIcon;
    const nextPlayerTurn = 1 - prevState.playerTurn;
    const nextCells = replace(cells, index, prevState.currentIcon);
    const gameState = winningState(nextCells);

    return {
      gameState: gameState,
      currentIcon: nextIcon,
      playerTurn: nextPlayerTurn,
      cells: nextCells
    }
  }

  humanPlay = (index) => {
    if (this.state.gameState.position === "" && this.state.cells[index] === null &&
      (this.state.gameType === TYPES_OF_GAME.HUMAN_PLAYERS || this.state.playerTurn === PLAYER_TURNS.HUMAN)) {

        
      this.setState(prevState => {
        return this.applyState(prevState, index);
      }, () => {
        // Make a move for computer if the game is in 'versus computer' mode
        if (this.state.gameState.position === "" &&
          this.state.gameType === TYPES_OF_GAME.VS_COMPUTER &&
          this.state.playerTurn === PLAYER_TURNS.COMPUTER) {

          setTimeout(() => {
            this.makeAIMove();
          }, THINKING_TIME);
        }
      });
      
    }
    
  }


  


  computerPlay = (index) => {
    if (this.state.gameState.position === "" && this.state.cells[index] === null &&
      this.state.gameType === TYPES_OF_GAME.VS_COMPUTER &&
      this.state.playerTurn === PLAYER_TURNS.COMPUTER) {

      this.setState(prevState => {
        return this.applyState(prevState, index);
      },() => {
        if (this.state.gameState.position === "" &&
        this.state.gameType === TYPES_OF_GAME.HUMAN_PLAYERS &&
        this.state.playerTurn === PLAYER_TURNS.HUMAN){

          
          setTimeout(() => {
            this.makeHUMANMove();
          }, THINKING_TIME);

        }
      });
    }
  }

  makeAIMove = () => {
    const bestMove = findBestMove(this.state.cells, this.state.currentIcon);

    if (bestMove !== null) {
      this.computerPlay(bestMove);
    }
  }

  componentDidMount() {
    this.initGame();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}