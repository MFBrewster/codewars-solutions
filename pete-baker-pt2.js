'use strict';

// Given a recipe and the ingredients already added, determine the number of
// whole cakes must be made to make use of all the ingredients already added,
// and then determine how much of each ingredient must be added to create that
// number of cakes

// http://www.codewars.com/kata/5267e5827526ea15d8000708

function getMissingIngredients(recipe, added) {
  let keys = Object.keys(recipe);
  let cakes = 1;
  let toAdd = {};

  // Determine number of cakes
  keys.forEach((key) => {
    if (added[key] > recipe[key] * cakes) {
      // Rounding up the result of dividing the ingredient already added
      // by the amount needed for each cake
      cakes = Math.ceil(added[key] / recipe[key]);
    }
  });

  // Populate array of ingredients still to be added
  keys.forEach((key) => {
    // Set default value of 0 for ingredient added
    let ingredient = added[key] ? added[key] : 0;
    // Determine how much of each ingredient is left to add in order to get the
    // correct number of cakes, then create that key-value pair i the array to be returned
    if (recipe[key] * cakes > ingredient) {
      toAdd[key] = recipe[key] * cakes - ingredient;
    }
  });

  return toAdd;
};

let recipe = {flour: 200, eggs: 1, sugar: 100};
let added = {flour: 50, eggs: 1};
