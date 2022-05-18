'use strict';

// document.querySelector('.message').textContent="Correct Number";

// document.querySelector('.number').textContent=20;

// document.querySelector('.score').textContent="20"

// document.querySelector('.guess').value=23;
let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;

document.querySelector('.check' ).addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent="Please enter some value";
    }else if(guess==secretNumber){
        document.querySelector('.message').textContent="Correct number!";
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="too High";
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="You lost the game";
        }
        
    }else{
        if(score>1){
            document.querySelector('.message').textContent="too low";
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="You lost the game";
        }
    }    
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing ....";
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

})