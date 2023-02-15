function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refGroup  = document.querySelector("#controls")
const refInput = refGroup.firstElementChild
const refCreateBtn = refGroup.querySelector("button")
const refDestroyBtn = refGroup.lastElementChild
const refBoxesDiv  = document.querySelector('#boxes') 

refGroup.addEventListener('click', onChangeInputValue)


function onChangeInputValue(evt) {

  if (evt.target === refCreateBtn) { 

    for (let i = 0, j = 30; i < Number(refInput.value); i += 1,j+=10) {

   const createDiv = document.createElement('div');
      createDiv.classList.add("item")
      createDiv.style.backgroundColor = getRandomHexColor();
      createDiv.style.width = `${j}px`;
      createDiv.style.height = `${j}px`;
    refBoxesDiv.appendChild(createDiv)
    }
  }else if (evt.target === refDestroyBtn) { 
    refBoxesDiv.innerHTML = '';
    };

  return refBoxesDiv
}




 


