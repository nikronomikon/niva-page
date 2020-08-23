
let func = () => {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    document.getElementsByClassName('output')[0].innerHTML = '';
    document.getElementsByClassName('output')[0].innerHTML += target.value;
    
};

calc.addEventListener('click', func);