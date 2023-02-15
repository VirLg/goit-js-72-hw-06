const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 
// пройтись мап по массиву, достать значение url и создать группу ли
// создать группу  ли по массиву(мепнуть)
// добавить группу ли в юл


const refUl = document.querySelector('.gallery')

const createElementGallary = function (arr) { 
  const marcup = arr.map(el => {
    const {url,alt } = el
    console.log(url);


    return  `<li class="list-item"><img 
      src="${url}"
      alt="${alt}"></img>
      </li>
  `

}).join('')
  console.log(marcup);
  return marcup
  }


refUl.insertAdjacentHTML("afterend", createElementGallary(images))

