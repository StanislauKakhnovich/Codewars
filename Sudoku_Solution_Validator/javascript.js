// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so
//  that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will 
// represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){
  let controlRow=true;
  let controlColumn=true;
  let controlRegion=true;
  let controlZero = true;
  let columnsArr = [];
  let regionArr = [];
  for (let i=0; i<9; i++){
    columnsArr.push([]);
    regionArr.push([]);
  };


  for (let i=0; i<board.length; i++){
    let row = Object.values(Object.assign({},board[i])) ;
    if(row.includes(0)) controlZero=false;
    for (let j=0; j<row.length; j++){
      columnsArr[j].push(row[j]);
      let indexRegionArr = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      regionArr[indexRegionArr].push(row[j]);
      let control = row[j];
      row[j] = 0;
      if (row.includes(control)) controlRow=false
    }
  }

  for (let i=0; i<columnsArr.length; i++){
    let row = Object.values(Object.assign({},columnsArr[i])) ;
    for (let j=0; j<row.length; j++){
      let control = row[j];
      row[j] = 0;
      if (row.includes(control)) controlColumn=false
    }
  }

  for (let i=0; i<regionArr.length; i++){
    let row = Object.values(Object.assign({},regionArr[i])) ;
    for (let j=0; j<row.length; j++){
      let control = row[j];
      row[j] = 0;
      if (row.includes(control)) controlRegion=false
    }
  }

  
  return controlZero&&controlRow&&controlColumn&&controlRegion?true:false;
}


console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                            [6, 7, 2, 1, 9, 5, 3, 4, 8],
                            [1, 9, 8, 3, 4, 2, 5, 6, 7],
                            [8, 5, 9, 7, 6, 1, 4, 2, 3],
                            [4, 2, 6, 8, 5, 3, 7, 9, 1],
                            [7, 1, 3, 9, 2, 4, 8, 5, 6],
                            [9, 6, 1, 5, 3, 7, 2, 8, 4],
                            [2, 8, 7, 4, 1, 9, 6, 3, 5],
                            [3, 4, 5, 2, 8, 6, 1, 7, 9]]));


                      

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                          [6, 7, 2, 1, 9, 0, 3, 4, 8],
                          [1, 0, 0, 3, 4, 2, 5, 6, 0],
                          [8, 5, 9, 7, 6, 1, 0, 2, 0],
                          [4, 2, 6, 8, 5, 3, 7, 9, 1],
                          [7, 1, 3, 9, 2, 4, 8, 5, 6],
                          [9, 0, 1, 5, 3, 7, 2, 1, 4],
                          [2, 8, 7, 4, 1, 9, 6, 3, 5],
                          [3, 0, 0, 4, 8, 1, 1, 7, 9]]));