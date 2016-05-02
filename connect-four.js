'use strict';

function connectFour(board) {

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
  return 'in progress';
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
  return 'in progress';
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
  return 'in progress';
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
  return 'in progress';
};

// will ONLY check if board is full, will depend on other functions to
// ensure that there is no winner
function isFull(board) {
  return board.every((curr) => {
    return curr.every(value => value !== '-');
  });
};

let fullBoard = [['X','X','X','X','X','X','X'],
                 ['X','X','X','X','X','X','X'],
                 ['X','X','X','R','R','R','R'],
                 ['X','X','X','Y','Y','R','Y'],
                 ['X','X','X','Y','R','Y','Y'],
                 ['X','X','Y','Y','R','R','R']];

let board = [['-','-','-','-','-','-','-'],
             ['-','-','-','-','-','-','-'],
             ['-','-','-','R','Y','Y','R'],
             ['-','-','-','Y','Y','Y','Y'],
             ['-','-','-','Y','R','Y','Y'],
             ['-','-','Y','Y','R','R','R']];
