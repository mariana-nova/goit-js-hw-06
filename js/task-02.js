const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientList = document.querySelector("#ingredients");
ingredients.forEach((ingredient)=>{
const IngredientElement = document.createElement("li");
  IngredientElement.classList.add("item");
  IngredientElement.textContent= ingredient;
  console.log(IngredientElement);
});