function getRandomHexColor() {
  
 return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
getRandomHexColor();

const refBody = document.body
const changeBodyBCGBtn = document.querySelector('.change-color')

changeBodyBCGBtn.addEventListener("click", changeColor)

function changeColor() { 
 refBody.style.backgroundColor = getRandomHexColor()
}


