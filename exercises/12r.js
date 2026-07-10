let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses : 0,
    ties: 0
}

updateScoreElement();


let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    
    if(!isAutoPlaying){
        document.querySelector('.js-auto-play').innerHTML = 'Stop Playing';
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        //console.log(intervalId);

        isAutoPlaying = true;
    }
    else{
        document.querySelector('.js-auto-play').innerHTML = 'Auto Play';
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
    document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });
  
  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}

//using addEventListener instead of onclick
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    });

document.querySelector('.js-auto-play')
    .addEventListener('click', ()=>{
        autoPlay();
    });

document.body
    .addEventListener('keydown', (event)=>{
        if(event.key === 'a'){
            autoPlay();
        }
    });

document.querySelector('.reset-score-button')
    .addEventListener('click', ()=>{
        showResetConfirmation()
    });


document.body
    .addEventListener('keydown', (event)=>{
        if(event.key === 'Backspace'){
            showResetConfirmation();
        }
    });


document.body.addEventListener('keydown', (event)=>{
    //console.log('keydown');
    //console.log(event);
    //console.log(event.key);
    if(event.key === 'r'){
        playGame('Rock');
    }
    else if(event.key === 'p'){
        playGame('Paper');
    }
    else if(event.key === 's'){
        playGame('Scissors');
    }
})


function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    //rock
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'you lose';
        }
        else if(computerMove === 'Scissors'){
            result = 'you win';
        }
    }

    //paper
    if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'you win';
        }
        else if(computerMove === 'Paper'){
            result = 'Tie';
        }
        else if(computerMove === 'Scissors'){
            result = 'you lose';
        }
    }

    //scissors
    if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'you lose';
        }
        else if(computerMove === 'Paper'){
            result = 'you win';
        }
        else if(computerMove === 'Scissors'){
            result = 'Tie';
        }
    }

    if(result === 'you win'){
        score.wins += 1;
    }
    else if(result === 'you lose'){
        score.losses += 1;
    }
    else if(result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img class="move-icon" src="/images/${playerMove}-emoji.png">
    <img class="move-icon" src="/images/${computerMove}-emoji.png">
    Computer`;

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    // Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
    ;
}



function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >=0 && randomNumber < 1/3 ){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    return computerMove;
}

