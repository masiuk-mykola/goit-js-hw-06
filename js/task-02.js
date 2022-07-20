const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const arrayIngredients = [];
// for (const item of ingredients) {
//   const ingredient = document.createElement('li');
//   ingredient.textContent = item;
//   ingredient.classList.add('item');
//   arrayIngredients.push(ingredient);
//   console.log('arrayIngredients', arrayIngredients);
// }
// const ingredientsRefs = document.querySelector('#ingredients');
// ingredientsRefs.append(...arrayIngredients);

const arrayIngredients = [];
ingredients.forEach(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');
  arrayIngredients.push(ingredient);
});
const ingredientsRefs = document.querySelector('#ingredients');
ingredientsRefs.append(...arrayIngredients);
