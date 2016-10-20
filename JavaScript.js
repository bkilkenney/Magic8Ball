var fortuneArray = ["Not Likely", "You Bet", "Doubtful", "Eh...Why not?", "Please...", "Yep"];

function getFortune() {
    document.getElementById("result").innerHTML = fortuneArray [Math.floor(Math.random()*6)]; 
}



