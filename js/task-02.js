const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

for (const item of ingredients) {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');
  const ingredientsRefs = document.querySelector('#ingredients');
  ingredientsRefs.appendChild(ingredient);
}
