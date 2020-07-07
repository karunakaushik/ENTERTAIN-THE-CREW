export const ICONS ={
    O: 0,
    X: 1
}

export const TYPES_OF_GAME = {
    HUMAN_PLAYERS: 0,
    VS_COMPUTER : 1
}
export const ICONS_CHAR=['O', 'X'];

export const PLAYER_TURNS = {
    HUMAN : 0,
    COMPUTER: 1
}

const getEmptyCells = (cells) => {
    return cells
      .map((val, idx) => [val, idx])
      .filter(item => item[0] === null);
}

const isMoveLeft = (cells) => {
    const emptyCells = getEmptyCells(cells);
    return emptyCells.length > 0;
}

export const winningState = (cells) => {
    const lines = [
      [0, 1, 2], //1st row
      [3, 4, 5],  //2nd row
      [6, 7, 8], //3rd row
      [0, 3, 6], //1st column
      [1, 4, 7], //2nd column
      [2, 5, 8], //3rd column
      [0, 4, 8], //diagonally
      [2, 4, 6]  //diagonally
    ];

    let position = "";

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
  
      if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
        if (i >= 0 && i <= 2) position = `h h${i}`;
        else if (i >= 3 && i <= 5) position = `v v${i - 3}`;
        else position = `d${i - 6}`;
  
        return {
          position,
          iconType: cells[a],
          isTie: null
        }
      }
    }
  
    return {
      position: "",
      iconType: null,
      isTie: isMoveLeft(cells) ? null : true
    };
  }

  export const getRandom = (start, end) => {
    return start + Math.floor(Math.random() * (end - start));
  }
  
  export const replace = (cells, index, value) => {
    return [...cells.slice(0, index), value, ...cells.slice(index + 1, cells.length)];
  }



//   * Find best move based on Minimax algorithm

  const evaluate = (cells, computerversus) => {
    const lines = [
        [0, 1, 2], //1st row
        [3, 4, 5],  //2nd row
        [6, 7, 8], //3rd row
        [0, 3, 6], //1st column
        [1, 4, 7], //2nd column
        [2, 5, 8], //3rd column
        [0, 4, 8], //diagonally
        [2, 4, 6]  //diagonally
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
    
        if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
          if (cells[a] === computerversus) return 10;
          return -10;
        }
      }
    
      return 0;
    }
    
  const minimax = (cells, depth, computerversus, isMax) => {
  const score = evaluate(cells, computerversus);

  if (score === 10) return score - depth;

  if (score === -10) return score + depth;

  if (!isMoveLeft(cells)) return 0;

  const lengthCells = cells.length;
  let best;

  if (isMax) {
    best = -1000;

    for (let i = 0; i < lengthCells; i++) {
      const cell = cells[i];

      if (cell === null) {
        const nextCells = replace(cells, i, computerversus);

        best = Math.max(best, minimax(nextCells, depth + 1, computerversus, !isMax));
      }
    }
  } else {
    best = 1000;

    for (let i = 0; i < lengthCells; i++) {
      const cell = cells[i];

      if (cell === null) {
        const nextCells = replace(cells, i, 1 - computerversus);

        best = Math.min(best, minimax(nextCells, depth + 1, computerversus, !isMax));
      }
    }
  }

  return best;
}

export const findBestMove = (cells, computerversus) => {
    let bestVal = -1000;
    let bestMove = null;
  
    const lengthCells = cells.length;
  
    for (let i = 0; i < lengthCells; i++) {
      const cell = cells[i];
  
      if (cell === null) {
        const nextCells = replace(cells, i, computerversus);
  
        const moveVal = minimax(nextCells, 0, computerversus, false);
  
        if (moveVal > bestVal) {
          bestVal = moveVal;
          bestMove = i;
        }
      }
    }
  
    return bestMove;
  }


  export const findRandomMove = (cells) => {
    const emptyCells = getEmptyCells(cells);
  
    if (emptyCells.length > 0) {
      const randomNum = getRandom(0, emptyCells.length);
      const index = emptyCells[randomNum][1];
  
      return index;
    }
  
    return null;
  }