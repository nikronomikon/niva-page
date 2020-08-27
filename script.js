
let func = () => {
    const target = event.target;
    const altDisp = document.getElementsByTagName('span')[0];
    const display = document.getElementsByClassName('output')[0];

    if (target.tagName != 'BUTTON') return;

    altDisp.classList.add('hidden');

    switch (target.id) {
        case 'divide': 
        case 'multiply':
        case 'subtraction':
        case 'addition':
            altDisp.innerHTML = display.innerHTML;
            display.innerHTML = resultFunc(altDisp.innerHTML);
            display.innerHTML += target.value;
            break;
        case 'negative':
            display.innerHTML = negPosFunc(display.innerHTML);
            break;
        case 'percent':
            display.innerHTML = percentFunc(display.innerHTML);
            break;
        case 'clear':
            display.innerHTML = '';
            altDisp.classList.remove('hidden');
            altDisp.innerHTML = '0';
            break;
        case 'result':
            display.innerHTML = resultFunc(display.innerHTML);
            break;
        default:
            display.innerHTML += target.value;
            break;
      }
};

let percentFunc = (num) => {
    num = eval(num) / 100;
    return num;
}

let negPosFunc = (num) => {
    num = num.split('')
    num[0] == '-' ? num.shift() : num.unshift('-');
    return num.join('');
}

let resultFunc = (num) => {
    switch (num.substring(num.length-1)) {
        case '+':
        case '-':
        case '/':
        case '*':
            num = Math.round(eval(num.substring(0,num.length-1))*100)/100;
            return num;
            break;    
        default:
            num = Math.round(eval(num)*100)/100;
            return num;
            break;    

    }
    num = Math.round(eval(num)*100)/100;
    return num;
}

calc.addEventListener('click', func);

