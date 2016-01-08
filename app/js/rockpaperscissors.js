/*   Provided Code - Please Don't Edit   */
> ////////////////////////////////////////////////

> 
> function getInput() {
>     console.log("Please choose either 'rock', 'paper', or 'scissors'.")
>     return prompt();
> }
> function randomPlay() {
>     var randomNumber = Math.random();
>     if (randomNumber < 0.33) {
>         return "rock";
>     } else if (randomNumber < 0.66) {
>         return "paper";
>     } else {
>         return "scissors";
>     }
> }
> ////////////////////////////////////////////////
> /*           Write Your Code Below            */
> ////////////////////////////////////////////////
> 
> function getPlayerMove(move)
>     // Write an expression that operates on a variable called `move`
>     // If a `move` has a value, your expression should evaluate to that value.
>     // However, if `move` is not specified / is null, your expression should equal `getInput()`.
>     return move || getInput();
> }
> 
> function getComputerMove(move) {
>     // Write an expression that operates on a variable called `move`
>     // If a `move` has a value, your expression should evaluate to that value.
>     // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
>     return move || randomPlay();
> }

var getWinner; 
var playerMove = 'rock';
var computerMove = 'paper';
var winner;
    
    if (playerMove === computerMove) {
       winner = 'tie';
   } else if (playerMove === 'rock' && computerMove === 'scissors') {
       winner= 'player';
   } else if (playerMove === 'paper' && computerMove === 'rock') {
       winner= 'player';
   } else if (playerMove === 'scissors' && computerMove === 'paper') {
       winner= 'player';
   } else {
       winner= 'computer';
   }
    console.log(winner);

> 
> function playToFive(playerMove, computerMove){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove= getPlayerMove();
    var computerMove= getComputerMove();
    var winner= getWinner(playerMove,computerMove);
    
    getPlayerMove();
    getComputerMove();
    getWinner(playerMove,computerMove);
    
    while(playerWins < 5 && computerWins < 5)
    {
        
        if (winner === 'player'){
            playerWins += 1;
        }
        else if (winner === 'computer'){
            computerWins += 1;
        }
        console.log("You chose " + playerMove + ", and your opponent chose " + computerMove + ".");
        console.log(winner + " wins!");
        console.log("The score is " + playerWins + " to " + computerWins);
    }
    return [playerWins, computerWins];
}
playToFive('paper','rock');


