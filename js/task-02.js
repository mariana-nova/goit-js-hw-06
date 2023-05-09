const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector(`#ingredients`);
const liArray =
ingredients.map(ingredients=>{
const li = document.createElement(`li`);
li.textContent = ingredients;
li.classList.add(`item`);
return li;
});
ulIngredients.append(...liArray);