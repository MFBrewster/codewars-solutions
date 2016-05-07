'use strict';


// Function takes an indefinite number of integers as arguments, and returns the
// largest palindromic number which can be made out of the numbers resulting from
// the product of any two or more of the arguments (or resulting from any of the
// aruments themselves).
//
// Problem found here: http://www.codewars.com/kata/556f4a5baa4ea7afa1000046

// Main function
const numericPalindrome = function() {
  let array = Array.from(arguments);
  array.filter((val) => val !== 0 && val !== 1);
  let productStrings = products([], array, []).map((x) => x.toString());
  let basePalindrome = productStrings.reduce((curr, val) => {
    return (getOnePalindrome(val) > getOnePalindrome(curr)) ? val : curr;
  }, '0');

  return getOnePalindrome(basePalindrome);
};


const products = function(act, rest, productsArray) {
  if (rest.length === 0) {
    if (act.length > 0) {
      productsArray.push(act.reduce((curr, val) => curr * val ));
    }
  } else {
    products(act.concat(rest[0]), rest.slice(1), productsArray);
    products(act, rest.slice(1), productsArray);
  }

  return productsArray;
}

const getOnePalindrome = function(productString) {
  let prefix = [];
  let suffix = [];
  let center = null;
  let array = productString.split('').sort().reverse();

  while (array.length > 0) {
    if (array[0] === array[1] && (prefix.length > 0 || array[0] !== '0')) {
      prefix.push(array.shift());
      suffix.unshift(array.shift());
    } else {
      if (center === null) {
        center = array.shift();
      } else {
        array.shift();
      } // nested if/else
    } // outer if/else
  } //while loop

  return parseInt(prefix.join('') + (center ? center : '') + suffix.join(''));
};
