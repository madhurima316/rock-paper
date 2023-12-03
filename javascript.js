let points = {
  win: 0,
  loss: 0,
  tie: 0
}
/*let win= 0
let loss= 0
let tie= 0
*/
function playerMove(p){
    let cs= compMove()
    console.log('player:'+ p)
    console.log('computer:'+ cs)
    document.querySelector('.moves').innerHTML = `You <img src="image/${p}.png" alt="${p}" style="height: 50px;width: 50px;padding: 10px;border: 1px solid black;background-color: rgb(240, 240, 189);border-radius: 35px;"> - <img src="image/${cs}.png" alt="${cs}" style="height: 50px;width: 50px;padding: 10px;border: 1px solid black;background-color: rgb(240, 240, 189);border-radius: 35px;"> Computer`
    game(p , cs)
    document.querySelector('.score').innerHTML = `win:${points.win} loss:${points.loss} tie:${points.tie}`

}
function compMove(){
  let c= Math.floor(Math.random()*3 + 1)
  if (c==1){
      return ('rock');
  }else if (c==2){
      return ('paper');
  }else {
      return ('scissors');
  }
            
}

function game(ps , cs){
    if ((ps=="rock" && cs=="paper") || (ps=="paper" && cs=="scissors") || (ps=="scissors" && cs=="rock")){
        points.loss++;
        document.querySelector('.result').innerHTML = 'You lost'
    }else if ((cs=="rock" && ps=="paper") || (cs=="paper" && ps=="scissors") || (cs=="scissors" && ps=="rock")){
        points.win++;
        document.querySelector('.result').innerHTML = 'You won'
    }else{
        points.tie++;
        document.querySelector('.result').innerHTML = 'Tie'
    }
}
        