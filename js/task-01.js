const categories = document.querySelector("#categories");

const numbers = categories.querySelectorAll(".item").length;
console.log(`number of categories: ${numbers}`)

const categoriesOne = categories.firstElementChild.querySelector('h2').textContent;
console.log(`categorie: ${categoriesOne}`);

const numberCategoriesOne = categories.firstElementChild.querySelectorAll("li").length;
console.log(`Elements: ${numberCategoriesOne}`);

const CategoriesTwo = categories.firstElementChild.nextElementSibling.querySelector("h2").textContent;
console.log(`categorie: ${CategoriesTwo}`);

const numberCategoriesTwo = categories.firstElementChild.nextElementSibling.querySelectorAll("li").length;
console.log(`Elements: ${numberCategoriesTwo}`);

const CategoriesTree = categories.firstElementChild.nextElementSibling.querySelector("h2").textContent;
console.log(`categorie: ${CategoriesTree}`);

const numberCategoriesTree = categories.firstElementChild.nextElementSibling.querySelectorAll("li").length;
console.log(`Elements: ${numberCategoriesTree}`);