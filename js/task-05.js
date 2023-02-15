const refInputValue = document.querySelector('#name-input');
const refSpanText = document.querySelector('#name-output');

refInputValue.addEventListener('input', onInputChange)


function onInputChange(evt) {
    if (!evt.currentTarget.value) {
    return    refSpanText.textContent = "Anonymous"
    }
    return refSpanText.textContent = evt.currentTarget.value
}

