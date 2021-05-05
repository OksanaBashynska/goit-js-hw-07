const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
}

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (refs.input.value !== '') {
        refs.output.textContent = event.currentTarget.value;
    } else {
        refs.output.textContent = 'незнакомец'
    };
};