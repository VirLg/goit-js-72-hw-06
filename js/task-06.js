const inputRef = document.querySelector("#validation-input")

inputRef.addEventListener('blur', validationInput)




function validationInput(evt) {

  inputRef.classList.add('invalid');

  if (Number(evt.target.value.length) === Number(inputRef.dataset.length)) {
   return inputRef.classList.replace('invalid', 'valid')
  } 
  return inputRef.classList.replace('valid', 'invalid') 
}

