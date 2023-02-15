const refInput = document.querySelector('#font-size-control')
const refSpan = document.querySelector('#text')

refInput.addEventListener('change', onEdetChack)


function onEdetChack(evt) { 

    refSpan.style.fontSize = evt.currentTarget.value+"px";    
};


