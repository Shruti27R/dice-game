var player1Num = Math.floor((Math.random()*6)+1);
var randomImage1 = ("Dice"+player1Num+".png");
var randomImageSrc1 = ("./images/"+randomImage1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc1);

var player2Num = Math.floor((Math.random()*6)+1);
var randomImage2 = ("Dice"+player2Num+".png");
var randomImageSrc2 = ("./images/"+randomImage2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

if(player1Num > player2Num){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (player1Num < player2Num){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {document.querySelector("h1").textContent = "Its a Draw!";}