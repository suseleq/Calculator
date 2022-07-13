// Selectors
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const reg = /[\u002B\u002A\u002D\u002F]/;
// Listener Events
clear.addEventListener('click', function(){
    input.value = 0;
});

equals.addEventListener('click', function(){
    input.value = eval(input.value);
});

buttons.forEach(button => {
    button.addEventListener('click', function(){
        if (button.innerHTML == '.'){
            input.value += button.innerHTML;
        } else if (input.value == '0'){
            if (button.innerHTML.match(reg)){
                input.value += button.innerHTML;
            }else{
            input.value = button.innerHTML;
            }
        }else{
            input.value += button.innerHTML;
        }
    });
});
