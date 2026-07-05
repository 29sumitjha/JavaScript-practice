//10c
const testButtonElement = document.querySelector('.js-button');
const check = testButtonElement.classList.contains('js-button');
console.log(check);


//10 d,e, f
function handleButtonToggleFeature(selector){
    const gamingButtonElement = document.querySelector(selector);

    if(!gamingButtonElement.classList.contains('toggle-gaming-button')){

        turnOfPreviousButton();

        gamingButtonElement.classList.add('toggle-gaming-button');
    }
    else{
        gamingButtonElement
            .classList
            .remove('toggle-gaming-button');
    }
}

function turnOfPreviousButton(){
    const previousButton = document.querySelector('.toggle-gaming-button');
    

    if(previousButton){
        previousButton.classList.remove('toggle-gaming-button');
    }
}