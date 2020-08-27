
let func = () => {
    const target = event.target;
    const altDisp = document.getElementsByTagName('span')[0];
    const display = document.getElementsByClassName('output')[0];

    if (target.tagName != 'BUTTON') return;
    limitedDigits(display.innerHTML);

    altDisp.classList.add('hidden');

    switch (target.id) {
        case 'divide': 
        case 'multiply':
        case 'subtraction':
        case 'addition':

            // verifying empty display
            if (!display.innerHTML) {
                display.innerHTML = '';
                altDisp.classList.remove('hidden');
                altDisp.innerHTML = '0';
                break;
            }
            // add digits
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
        case 'backspace':
            display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1);
            if (!display.innerHTML) {
                display.innerHTML = '';
                altDisp.classList.remove('hidden');
                altDisp.innerHTML = '0';
                break;
            }
            break;
        case 'clear':
            display.innerHTML = '';
            altDisp.classList.remove('hidden');
            altDisp.innerHTML = '0';
            break;
        case 'point':
            switch (display.innerHTML.substring(display.innerHTML.length-1)) {
                case '+':
                case '-':
                case '/':
                case '*':
                case '':
                    display.innerHTML = pushZero(display.innerHTML);
                    break;    
                default:
                    break;
            }    
        if (display.innerHTML.substring(display.innerHTML.length-1) != 0) {
                display.innerHTML.push
            }
            display.innerHTML += target.value;
            break;
        case 'result':
            if (!display.innerHTML) {
                display.innerHTML = '';
                altDisp.classList.remove('hidden');
                altDisp.innerHTML = '0';
                break;
            }

            display.innerHTML = resultFunc(display.innerHTML);
            break;
        default:
            display.innerHTML += target.value;
            display.innerHTML = limitedDigits(display.innerHTML);
            break;
      }
};

// let verNullInput = () => {
//     if (!display.innerHTML) {
//         display.innerHTML = '';
//         altDisp.classList.remove('hidden');
//         altDisp.innerHTML = '0';
//         return;
//     }
// }

let limitedDigits = (num) => {
    if (num.length < 15) {
        return num;
    }
    return limitedDigits(num.substring(0,num.length-1));
}

let pushZero = (num) => {
    num = num.split('');  
    num.push('0');  
    return num = num.join('');
}

let percentFunc = (num) => {
    num = (Math.ceil(eval(num)*100)/10000);
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

