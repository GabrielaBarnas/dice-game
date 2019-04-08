/*
Game Rules:

- the game has 2 players, they play in rounds
- Each turn the active player can roll as many times as they want and the score is tallied to current score
-IF the active player rolls a 1 the current player is lost AND the next player becomes the active player
- each player has ability to 'hold' their score, which means that the current score total is added to total score and play passes to the next player 
- the winner is the first player to reach 100 points with their total score (global score) 

-- we need to track: scores (global score, round score), active player, dice

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



// hide the dice initially
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    let dice = Math.ceil(Math.random()*6); /* Math.floor(Math.random()*6)+1 */
    let diceDom = document.querySelector('.dice');
    

    // display the dice
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';
    
    // current score of active player
    document.querySelector('#current-'+activePlayer).textContent = dice;
console.log(dice);
    
})