const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Please enter either rock, paper, or scissors.');
    }
};
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You won! (cheater)';
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
