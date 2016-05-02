'use strict';

// Solution to codewars problem "Snail" (4 kyu)
// http://www.codewars.com/kata/529962509ce9545c76000afa

// Function takes 6 x 7 length nested array and determines whether a "Connect Four"
// game represented by the arrray is completed or not, and if so, who won and
// whether it was a draw

// My strategy was to have the checks for vertical, horizontal, and diagonal
// wins abstracted out to different functions, another function which checks for
// draws, and the 'connectFour' function, which ties all of the logic together

function connectFour(board) {

  // winner will equal either 'R' if R has won, 'Y' if Y has won, or null
  let winner = horizontal(board) ||
               vertical(board) ||
               diagTLBR(board) ||
               diagBLTR(board);

  // Will return the winner if there is one, or if not, either 'draw' or
  // 'in progress' depending on whether the board is full
  return winner ? winner : isFull(board) ? 'draw' : 'in progress';
};

function horizontal(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 3; j++) {
      if (board[i][j] !== '-' && board[i][j] === board[i][j + 1]
        && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) {
        return board[i][j];
      }
    }
  }
  return null;
};

function vertical(board) {
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length - 3; j++) {
      if (board[j][i] !== '-' && board[j][i] === board[j + 1][i]
        && board[j][i] === board[j + 2][i] && board[j][i] === board[j + 3][i]) {
        return board[j][i];
      }
    }
  }
  return null;
};


function diagTLBR(board) {
  for (let i = 0; i < board[0].length - 3; i++) {
    for (let j = 0; j < board.length - 3; j++) {
      if (board[j][i] !== '-' && board[j][i] === board[j + 1][i + 1]
        && board[j][i] === board[j + 2][i + 2] && board[j][i] === board[j + 3][i + 3]) {
        return board[j][i];
      }
    }
  }
  return null;
};

function diagBLTR(board) {
  for (let i = 0; i < board[0].length - 3; i++) {
    for (let j = board.length - 1; j >= 3; j--) {
      if (board[j][i] !== '-' && board[j][i] === board[j - 1][i + 1]
        && board[j][i] === board[j - 2][i + 2] && board[j][i] === board[j - 3][i + 3]) {
        return board[j][i];
      }
    }
  }
  return null;
};

// will ONLY check if board is full, will depend on other functions to
// ensure that there is no winner
function isFull(board) {
  return board.every((curr) => {
    return curr.every(value => value !== '-');
  });
};

// let fullBoard = [['X','X','X','X','X','X','X'],
//                  ['X','X','X','X','X','X','X'],
//                  ['X','X','X','R','R','R','R'],
//                  ['X','X','X','Y','Y','R','Y'],
//                  ['X','X','X','Y','R','Y','Y'],
//                  ['X','X','Y','Y','R','R','R']];
//
// let board = [['-','-','-','-','-','-','-'],
//              ['-','-','-','-','-','-','-'],
//              ['-','-','-','R','Y','Y','R'],
//              ['-','-','-','Y','Y','Y','Y'],
//              ['-','-','-','Y','R','Y','Y'],
//              ['-','-','Y','Y','R','R','R']];
