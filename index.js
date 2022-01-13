function rollDices(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    let randomDiceImage = "images/dice" + randomNumber1 + ".png";
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll(".img1")[0].setAttribute("src", randomDiceImage);
    document.querySelectorAll(".img1")[1].setAttribute("src", randomDiceImage2);
    
    if(randomNumber1 > randomNumber2){
        document.querySelector(".topic").textContent = "😜 Play 1 Wins!";
    } else if(randomNumber1 < randomNumber2){
        document.querySelector(".topic").textContent = "🤩 Play 2 Wins!";
    } else {
        document.querySelector(".topic").textContent = "😬 Draw!";
    }
}

function checkRefresh() {
    if (!sessionStorage.getItem("rollDice")) {
        sessionStorage.setItem("rollDice", "extra")

    } else(
       rollDices()
    )
   
}

document.querySelector("body").onload = checkRefresh();

   

