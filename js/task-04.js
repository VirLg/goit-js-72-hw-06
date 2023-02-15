let counterValue = 0;

const refGroup = document.querySelector("#counter")
const refSpan = refGroup.querySelector('#value')
const refBtnDecrement = refGroup.querySelector('button[data-action="decrement"]')
const refBtnIncrement = refGroup.querySelector('button[data-action="increment"]')
const refSpanValue = refGroup.querySelector('#value')
counterValue = refSpanValue

refGroup.addEventListener('click', onButtonClick)

function onButtonClick(evt) {
    if (evt.target === refBtnDecrement) {
       return refSpanValue.textContent -=1;
    } else if(evt.target ===refBtnIncrement){
return refSpanValue.textContent  = refSpanValue.textContent*1+1 ;
    };
}



