import React, { Component } from 'react';
import { AppContext } from './AppProvider';
import {  ICONS_CHAR } from './minimax';
import './src/css/sketch.css';

const ICON_PLACE_HOLDDER = 'I';

const Cell = (props) => {
  return (
    <AppContext.Consumer>
      {context => {
        const value = context.cells[props.index];
        const icon = value !== null ? ICONS_CHAR[value] : ICON_PLACE_HOLDDER;
        const isDoneClass = icon !== ICON_PLACE_HOLDDER ? 'done' : '';

        return (
          <button
            className={`cell cell-${props.index} ${isDoneClass}`}
            onClick={() => context.humanPlay(props.index)}>
            {icon}
          </button>
        )
      }}
    </AppContext.Consumer>
  )
}

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.boardRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.context.gameState.position !== "") {
      setTimeout(() => {
        this.boardRef.current.classList.add('full');
      }, 50);
    } else {
      this.boardRef.current.classList.remove('full');
    }
  }

  render() {
    return (
      <div className={`boardcontainer ${this.context.gameState.position}`} ref={this.boardRef}>
        <div className="boardRow1">
          <Cell index={0} />
          <Cell index={1} />
          <Cell index={2} />
        </div>

        <div className="boardRow2">
          <Cell index={3} />
          <Cell index={4} />
          <Cell index={5} />
        </div>

        <div className="boardRow3">
          <Cell index={6} />
          <Cell index={7} />
          <Cell index={8} />
        </div>
      </div>
    )
  }
}
Board.contextType = AppContext;