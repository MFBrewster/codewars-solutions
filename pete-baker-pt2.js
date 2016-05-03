'use strict';

function getMissingIngredients(recipe, added) {
  let keys = Object.keys(recipe);
  let cakes = 1;
  let toAdd = {};

  keys.forEach((key) => {
    if (added[key] > recipe[key] * cakes) {
      cakes = Math.ceil(added[key] / recipe[key]);
    }
  });

  keys.forEach((key) => {
    if (recipe[key] * cakes > (added[key] ? added[key] : 0)) {
      toAdd[key] = recipe[key] * cakes - (added[key] ? added[key] : 0);
    }
  });

  return toAdd;
};

let recipe = {flour: 200, eggs: 1, sugar: 100};

let added = {flour: 50, eggs: 1};
