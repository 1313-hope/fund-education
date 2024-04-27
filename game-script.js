let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function pickComputerMove() {
  const randomNumber = Math.random(); 
  let computer = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computer = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computer = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computer = 'Scissors';
  }

  return computer;
}

function playGame(playerMove) {
  let choice = playerMove;
  computer = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computer === 'Scissors') {
    result = 'You win.';
    } else if (computer === 'Paper') {
    result = 'You lose.';
    } else {
    result = 'Tie.';
    }
  } else if (playerMove === 'Scissors') {
    if (computer === 'Scissors') {
      result = 'Tie.';
    } else if (computer === 'Paper') {
      result = 'You win.';
    } else {
      result = 'You lose.';
    }
  } else if (playerMove === 'Paper') {
    if (computer === 'Scissors') {
      result = 'You lose.';
    } else if (computer === 'Paper') {
      result = 'Tie.';
    } else {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="icons/${choice.toLowerCase()}.png" class="game-icon"> <img src="icons/${computer.toLowerCase()}.png" class="game-icon"> Computer`;      
  

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  

  /*
  alert(`You picked ${playerMove}. Computer picked ${computer}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  */

}