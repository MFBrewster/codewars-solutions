'use strict';

// Solution to codewars problem "Snail" (4 kyu)
// http://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// Function takes n x n length nested array and prints its values in order
// from a clockwise rotation, starting at the top left corner and finishing
// in the nested array

// snail([
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
// ]) === [1,2,3,6,9,8,7,4,5]

const snail = function(array) {
  let returnArray = [];
  let editArray = array;

  while (editArray.length > 0) {
    // Add top row to return array
    returnArray = returnArray.concat(editArray.shift());

    // get out of loop if array.length is an odd number
    if (editArray.length === 0) { break; }

    // get right column in return array
    editArray.forEach((row) => { returnArray.push(row.pop()); });

    // add bottom row to return array
    returnArray = returnArray.concat(editArray.pop().reverse());

    // add left column to return array
    editArray.forEach((row) => { returnArray.push(row.shift()); });
  }
  return returnArray;
};

// Function to build sample arrays
let arrayBuilder = function(num) {
  let returnArray = [];
  for (let i = 0; i < num; i++) {
    returnArray.push([]);
    for (let j = 0; j < num; j++) {
      returnArray[i][j] = (i*num) + j;
    }
  }
  return returnArray;
};

let array = arrayBuilder(5);
let puts = snail(array);
console.log(puts);
