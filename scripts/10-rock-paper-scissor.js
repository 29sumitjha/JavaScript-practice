let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses : 0,
    ties: 0
}

updateScoreElement();




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
    <img class="move-icon" src="images/${playerMove}-emoji.png">
    <img class="move-icon" src="images/${computerMove}-emoji.png">
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

