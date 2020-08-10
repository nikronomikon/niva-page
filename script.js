let convertClickFunc = () => {
    let text = document.getElementById('input_text');
    text.classList.add('magic_effect');
    setTimeout(() => text.classList.remove('magic_effect'), 2000);
    let converteredEl = document.getElementsByClassName('converted_text')[0];
    let converteredText = text.value;
    if (document.getElementsByClassName('new_element')[0] === undefined)  // для проверки дочерних узлов - elem.hasChildNodes()
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
        let existDiv = document.getElementsByClassName('new_element')[0];
        existDiv.innerHTML = converteredText;
        div.classList.add('magic_effect_invert');
        setTimeout(() => div.classList.remove('magic_effect_invert'), 2000)
    }  
}
let songfunc = () => {
    let song = document.getElementById('input_text');
    song.value = '<div>\n<h1>Famous Russian song</h1>\n<h3>All together</h3>\n</br>Карусель, карусель начин<i>а-а-а-</i>ет рассказ.<br>\nЭто сказки, песни и веселье!<br>\nКарусель, карусель — это р<i>а-а-а-</i>дость для нас,<br>\nПрокатись на нашей карус<i>e-e-e-e-e-e-</i>ли<b>!</b>\n</div>';
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
        var color = document.getElementById('colorSelect');
        let existingDiv = document.getElementsByClassName('new_element')[0];
        if (color.value == "black"){
            existingDiv.style.color = 'black'
        } else if (color.value == "blue") {
            existingDiv.style.color = '#2E97F2'
        } else if (color.value == "coral") {
            existingDiv.style.color = 'coral'
        }     
}
