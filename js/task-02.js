const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
ingredients.forEach((item)=>{
  let itemIngredient = document.createElement("li");
  itemIngredient.className="item";
  itemIngredient.textContent= item;
  listIngredients.appendChild(itemIngredient);
})