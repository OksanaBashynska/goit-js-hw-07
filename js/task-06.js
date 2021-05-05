const input = document.getElementById('validation-input');
const length = input.getAttribute('data-length')
const lengthNumb = Number(length);


input.addEventListener('blur', onInputUnfocus);
function onInputUnfocus(event) {
    input.classList.add('validation-input')
    if (event.currentTarget.value.length === lengthNumb) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
         input.classList.remove('valid')
    };
    
};
