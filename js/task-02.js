const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulRef = document.querySelector("#ingredients")


const fn = function (arr) {

  return arr.map(el => {
    const itemEl =document.createElement("li")
    itemEl.classList.add("item")
    itemEl.textContent = el;
    return itemEl
  }) 
}

console.log(fn(ingredients));


const fnAddEl = function (el) { 
  return ulRef.append(...el)
}


console.log(fnAddEl(fn(ingredients)));



