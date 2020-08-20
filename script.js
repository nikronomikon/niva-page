let convertClickFunc = () => {
    let text = document.getElementById('input_text');
    let converteredEl = document.getElementsByClassName('converted_text')[0];
    let converteredText = text.value;

    text.classList.add('magic_effect');
    setTimeout(() => text.classList.remove('magic_effect'), 2000);
    
    if (!document.querySelectorAll('.new_element')[0])
    {
        let div = document.createElement('div');

        div.className = "new_element";
        div.innerHTML = converteredText;
        converteredEl.append(div);
        div.classList.add('magic_effect_invert');
        setTimeout(() => div.classList.remove('magic_effect_invert'), 2000)
    }
    else 
    { 
        let existDiv = document.querySelectorAll('.new_element')[0];

        existDiv.innerHTML = converteredText;
        existDiv.classList.add('magic_effect_invert');
        setTimeout(() => existDiv.classList.remove('magic_effect_invert'), 2000)
    }  
}

let songfunc = () => {
    let song = document.getElementById('input_text');

    song.value = '<h1 style="padding-left: 10px; background-color: #F2A2B1; border-radius: 5px; color: white;">Famous Russian song</h1>\n<div style="margin-left: 10px;">\n<h3>All together</h3>\n</br>Карусель, карусель начин<i>а-а-а-</i>ет рассказ.<br>\nЭто сказки, песни и веселье!<br>\nКарусель, карусель — это р<i>а-а-а-</i>дость для нас,<br>\nПрокатись на нашей карус<i>e-e-e-e-e-e-</i>ли<b>!</b>\n</div>';
}
let clearLeft = () => {
    let existingText = document.getElementById('input_text');

    existingText.value = '';
}
let clearRight = () => {
    let existingText = document.getElementsByClassName('new_element')[0];

    existingText.remove();
}

let setColor = () => {
        let color = document.getElementById('colorSelect');
        let existingDiv = document.getElementsByClassName('new_element')[0];

        if (!existingDiv){ return;}

        if (color.value == "black"){
            return existingDiv.style.color = 'black'
        } else if (color.value == "blue") {
            return existingDiv.style.color = '#2E97F2'
        } else if (color.value == "coral") {
            return existingDiv.style.color = 'coral'
        }
        
}
                                                                                                                                      
convert_button.addEventListener('click', convertClickFunc);

clear_button_right.addEventListener('click', clearRight);

clear_button_left.addEventListener('click', clearLeft);

colorSelect.addEventListener('click', setColor);
