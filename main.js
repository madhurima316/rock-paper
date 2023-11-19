let pscore =0;
let cscore =0;
game()

function getComputerChoice(){
    const c = Math.floor(Math.random()*3 + 1)
    if (c==1){
        return ("rock");
    }else if (c==2){
        return ("paper");
    }else {
        return ("scissors");
    }
}

function playRound(ps,cs){
    if ((ps=="rock" && cs=="paper") || (ps=="paper" && cs=="scissors") || (ps=="scissors" && cs=="rock")){
        cscore++;
    }else if ((cs=="rock" && ps=="paper") || (cs=="paper" && ps=="scissors") || (cs=="scissors" && ps=="rock")){
        pscore++;
    }else{
        cs = getComputerChoice()
        ps = getPlayerChoice()
        console.log("this time ,computer choice is", cs)
        playRound(ps,cs)
    }
}

function getPlayerChoice(){
    const prompt = require("prompt-sync")() ;
    var choice = prompt("enter your choice out of rock , paper , scissors =");
    return (choice);
}

function game(){
    for (let i=1; i<6 ; i++){
        let ps = getPlayerChoice();
        let cs = getComputerChoice();
        console.log("computer choice is ",cs)
        playRound(ps , cs);
    }
    console.log("player score =" , pscore)
    console.log("computer score =", cscore)
    if (cscore > pscore){
        console.log("Computer is winner")
    }else{
        console.log("user is winner")
    }
}
