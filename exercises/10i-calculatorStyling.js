let calculation = localStorage.getItem('calculationStore') || '';
displayCalculation();

function updateCalculation(pressedButton){
    calculation += pressedButton;
    //console.log(calculation);
    displayCalculation();

    localStorage.setItem('calculationStore',calculation);

}

function displayCalculation(){
    document.querySelector('.js-show-calculation').innerHTML = calculation;
}