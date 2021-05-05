const input = document.querySelector('input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

//
//input.addEventListener('input', onInputGetAmount);
 renderBtn.addEventListener('click', createBoxes);

/* function onInputGetAmount(event) {
    const amount = event.currentTarget.value;
    const amountNumb = Number(amount);
} */
const amountNumb = 7;
   
    function createBoxes (amountNumb) {
    
        for (let i = 0; i < amountNumb; i++) {
            const ingredientsItemEl = document.createElement('div');
            boxesContainer.appendChild(ingredientsItemEl);
        }
 
    }
   



//Пока не знаю


    

