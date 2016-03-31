'use strict';

// Solution to codewars problem "Pascal's Triangle" (4 kyu)
// http://www.codewars.com/kata/5226eb40316b56c8d500030f

// Instructions:
// Write a function that, given a depth (n), returns a single-dimensional
// array representing Pascal's Triangle to the n-th level.
// For example:
// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalsTriangle(n) {
  let tri = [];
  // Initialize with first row
  if (n) tri.push([1]);

  // For additional rows after first....
  for (let i = 1; i < n; i++) {
    // Push leading 1
    tri.push([1]);
    // Reset while loop counter
    let j = 0;

    // While there are numbers left to add in the latest complete row...
    while (tri[i - 1].length > tri[i].length) {
      // Add array elements in the latest complete row
      tri[i].push( tri[i-1][j] + tri[i-1][j+1]);
      // Increment the counter
      j++;
    }
    // Push the trailing 1
    tri[i].push(1);
  }

  // Calls "concat" on an empty array, passing an empty array as the "this"
  // parameter, so that the nested array is flattened and concatenated
  return [].concat.apply([], tri);
}

console.log(pascalsTriangle(5));
