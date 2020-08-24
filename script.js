
let func = () => {
    let target = event.target;
    const altDisp = document.getElementsByTagName('span')[0];
    const display = document.getElementsByClassName('output')[0];
    if (target.tagName != 'BUTTON') return;
    altDisp.classList.add('hidden');
    display.innerHTML += target.value;
    if (target.id =='clear') {
        display.innerHTML = '';
        altDisp.innerHTML = '0';
        altDisp.classList.remove('hidden');
    }
    if (target.id =='negative') {
        display.innerHTML = negPosFunc(display.innerHTML);
    }
    if (target.id =='percent') {
        display.innerHTML = percentFunc(display.innerHTML);
    }
    if (target.id =='divide') {
        display.innerHTML = divideFunc(display.innerHTML);
    }
    if (target.id =='multiply') {
        display.innerHTML = multiplyFunc(display.innerHTML);
    }
    if (target.id =='minus') {
        display.innerHTML = minusFunc(display.innerHTML);
    }
    if (target.id =='plus') {
        display.innerHTML = plusFunc(display.innerHTML);
    }
    if (target.id =='result') {
        altDisp.classList.remove('hidden');
        altDisp.innerHTML = resultFunc(display.innerHTML);
        display.innerHTML = '';
    }
};

let negPosFunc = (num) => {
        num = parseInt(num) * (-1);
        return num;
}
let percentFunc = (num) => {
    num = eval(num) / 100;
    return num;
}
let divideFunc = (num) => {
    num = num + '/';
    return num;
}
let multiplyFunc = (num) => {
    num = num + '*';
    return num;
}
let minusFunc = (num) => {
    num = num + '-';
    return num;
}
let plusFunc = (num) => {
    num = num + '+';
    return num;
}
let resultFunc = (num) => {
    num = Math.round(eval(num)*100)/100;
    return num;
}


calc.addEventListener('click', func);

