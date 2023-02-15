const refForm = document.querySelector('.login-form')

refForm.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) { 
    evt.preventDefault();

    let formData = new FormData(evt.currentTarget);

    formData.forEach((value,name)=> {
        // console.log(value);
        // console.log(name);

        if (!value || !name) { 
            alert("всі поля повинні бути заповнені")
        }
    formData = {
            name: name,
            value:value,
        }

      return  console.log(formData);
      
        // reset.formData

    });

refForm.reset()
}












