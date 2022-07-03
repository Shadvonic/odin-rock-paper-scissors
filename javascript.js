

let userInput;  

// console.log(userInput); 
let computerChoice = computerPlay(); 


// num of rounds 
let roundCounter; 
// num of user wins 
let userWins = 0;
// num cpu wins 
let cpuWins = 0; 

// randomly returns 'rock, 'paper' or 'scissors'
function computerPlay() {
    //choice for cpu to choose from 
    let selection = ["rock", "paper", "scissors"]; 
    // gets a random index value 
    let randomIndex = Math.floor(Math.random() * selection.length);
    // use  random index value to access array to get random selection 
    let computerSelection = selection[randomIndex];
    // return random selection
    return computerSelection
}
// console.log(computerPlay()); 


function playRound(userInput,computerChoice) {
    //prompt user for choice 
    //make case insensitive 
    userInput = prompt("Please enter a selection (rock, paper, scissors): ").toLowerCase(); 

    if(userInput === 'rock' && computerChoice === 'scissors') {
        userWins += 1;
        console.log("You win! Rock beats Scissors");
      
    }  else if (computerChoice === "rock" && userInput === "scissors") {
        cpuWins += 1
        console.log("You lose! Rock beats Scissors");
       
    } else if(userInput === "paper" && computerChoice === "rock") {
        userWins += 1;
        console.log("You win! Paper beats Rock"); 
       
    } else if(computerChoice === "paper" && userInput === "rock") {
        cpuWins += 1
        console.log("You lose! Paper beats Rock"); 
        
    } else if(userInput === "scissors" && computerChoice === "paper") {
        userWins += 1;
        console.log("You win! Scissors beats Paper");
       
    } else if(computerChoice === "scissors" && userInput === "paper") {
        cpuWins += 1
        console.log("You lose! Scissors beats Paper");
        
    } else {
        console.log("Draw! Nobody wins."); 
    }

    console.log(`User score: ${userWins}`);
    console.log(`Computer score ${cpuWins}`);
   
}

function game() {
    for(let roundCounter = 0; roundCounter < 5; roundCounter++) {
        playRound(userInput, computerChoice);
    }

    if(userWins > cpuWins) {
        console.log(`User wins! With ${userWins} wins`);
      
    } else {
        console.log(`Computer wins! With ${cpuWins} wins`);
        
    }
    
}

console.log(game());