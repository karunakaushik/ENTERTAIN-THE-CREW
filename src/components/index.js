import React, { Component } from 'react';
import { AppContext } from './AppProvider';
import { TYPES_OF_GAME,  PLAYER_TURNS, ICONS_CHAR} from './minimax';
import Robot from './src/img/robot.svg'
import Human from './src/img/human.svg'
import './src/css/main.css'
import Board from './sketch';
import Hints from './hints';


const GameType = (props) => {
    const { value, name } = props;

    return (
      <AppContext.Consumer>
        {context => (
          <li 
            onClick={() => context.changeType(value)} 
            className={value === context.gameType ? "active" : ""}> 
            {name} 
          </li>
        )}
      </AppContext.Consumer>
    )
  }

class MainPage extends Component {
  render() {
    // var ScorePlayer1 = 0;
    // var ScorePlayer2 = 0;
    let textInfo = '';
    const currentIconType = this.context.currentIcon;

    if (this.context.gameState.isTie) {
      textInfo = 'Tie!';
    } else {
      if (this.context.gameType === TYPES_OF_GAME.HUMAN_PLAYERS) {
        if (this.context.gameState.position === "") {
          textInfo = `It's player(${ICONS_CHAR[currentIconType]}) turn`;
        } else {
          textInfo = `Player(${ICONS_CHAR[1 - currentIconType]}) wins!`;
        }
      } else {
        if (this.context.gameState.position === "") {
          if (this.context.playerTurn === PLAYER_TURNS.HUMAN) textInfo = `It's your turn`;
          else textInfo = `It's computer turn`;
        } else {
          if (this.context.playerTurn === PLAYER_TURNS.HUMAN) textInfo = `Computer win!`;
          else textInfo = `You win!`;
        }
      }
    }

    return (
      <div className="container">
      <div className="headerDiv">
        <h1>Tic Tac Toe</h1>

         <div className="playersDiv">
                
                <div className="playersBox">
                     <Hints />
                    <div className="playerinnerBox">
                        <div className="humanplayers">
                            <img src={Human} alt="Human" />
                            <GameType value={TYPES_OF_GAME.HUMAN_PLAYERS} name="2 Human-Players" />
                        </div>

                        <div  className="computerVS">
                            <img src={Robot} alt="ROBOT" />
                            <GameType value={TYPES_OF_GAME.VS_COMPUTER} name="Versus Computer/AI" />
                        </div>
                    </div>
                  
             </div>
            
                <div className="gameBox">
              <div className="newgameButton">
                  <button onClick={() => this.context.newGame()}>New Game</button>
              </div>
              <div className="info">{textInfo}</div>
                <Board />
              </div>
          </div>

       </div>
      </div>

      
    );
  }
}

MainPage.contextType = AppContext;

export default MainPage;





